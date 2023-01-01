const scoreboard = require("../config/scoreboard");

const getScore = async (req,res)=>{
    try {
        const score = await scoreboard.findOne({where:{user_name: req.body.user_name}});
        res.send(score);
    } catch (error) {
        console.log(error);
    }
}

const createScore = async(req,res)=>{
 const findUser = await scoreboard.findOne({where:{user_name:req.body.user_name}});
 if(!findUser){
        const score = await scoreboard.create({user_name:req.body.user_name,win:0,totalPlayed:0});
        res.json("Userın scoreu oluştuıruldu");
 }
 res.send(findUser)
}

const updateScore = async(req,res)=>{
    try {
        await scoreboard.update({win : req.body.win,totalPlayed: req.body.totalPlayed});
        res.json("Userın score bilgileri güncellendi");
    } catch (error) {
        console.log(error);
    }
}

const getAllScore = async(req,res)=>{
    try {
       const score =  await scoreboard.findAll();
       res.send(score);
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getScore,
    createScore,
    updateScore,
    getAllScore
}