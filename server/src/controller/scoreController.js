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
  try {
    const score = await scoreboard.create(req.body);
    res.json("Userın scoreu oluştuıruldu");
  } catch (error) {
    console.log(error);
  }
}

const updateScore = async(req,res)=>{
    try {
        await scoreboard.update({win : req.body.win,totalPlayed: req.body.totalPlayed});
        res.json("Userın score bilgileri güncellendi");
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getScore,
    createScore,
    updateScore,
}