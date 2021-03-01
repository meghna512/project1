const Room = require("../models/room");
const _ = require('lodash');

async function getRoomVolume(req, res) {
    let room = await Room.find().populate('house');
    let roomArray = [];
    for (let r of room) {
        r = r.toObject();
        r.volume = r.length * r.breadth * r.height;
        roomArray.push(r);
    }

    roomArray = _.groupBy(roomArray, 'volume');
    res.status(200).json(roomArray);
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
    res.status(200).json(roomArray);
}

module.exports = {
    getRoomVolume,
    getHouseArea
}