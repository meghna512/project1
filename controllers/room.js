const Room = require("../models/room");
const _ = require('lodash');

async function getRoomVolume(req, res) {
    let roomArray;
    try {
        roomArray = await Room.aggregate([
            {
                $addFields: {
                    volume: { $multiply: ["$length", "$breadth", "$height"] }
                }
            },
            {
                $lookup: {
                    from: "houses",
                    localField: "house",
                    foreignField: "_id",
                    as: "house"
                }
            },
            {
                $unwind: "$house"
            },
            {
                $group: {
                    _id: "$volume",
                    house: { $addToSet: "$house.owner" }
                }
            },
            {
                $project: {
                    volume: "$_id",
                    _id: 0,
                    owner: "$house"
                }
            }
        ]);
    } catch(err) {
        return res.status(500).json(err.message);
    }

    return res.status(200).json(roomArray);
}

async function getHouseArea(req, res) {
    let room = await Room.find().populate('house');
    let roomArray = [];
    for (let r of room) {
        r = r.toObject();
        r.area = r.length * r.breadth;
        roomArray.push(r);
    }
    roomArray = _.groupBy(roomArray, 'house._id');
    return res.status(200).json(roomArray);
}

module.exports = {
    getRoomVolume,
    getHouseArea
}