const express = require("express");
const router = express.Router();
const houseController= require("./controllers/house");
const roomController= require("./controllers/room");

router.post("/list",houseController.listMembers);
router.get("/volume",roomController.getRoomVolume);
router.get("/area", roomController.getHouseArea);
router.get("/ping", function(req, res){
    res.send("pong");
})
module.exports=router;