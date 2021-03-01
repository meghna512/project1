const House= require("../models/house");

async function listMembers(req, res){
    const member = req.body.member;
    const allHouses= await House.find({members: {$gt: member}});
    res.status(200).json(allHouses);
}

module.exports= {
    listMembers
}