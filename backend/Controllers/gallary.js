const GallaryModel = require("../Models/gallary")

exports.addImage = async(req,res)=>{

    try {

      const {link} = req.body;

      const image = new GallaryModel({link,addedBy:req.user?._id});

      await image.save();

      res.status(200).json({

        message:"Image Added Successfully",

        image
      })  

    } catch (err) {

        console.log(err)

        res.status(500).json({

            error:"Something Went Wrong",

            issue:err.message

        })
    }
}

exports.getAllGallary = async(req,res)=>{

    try {

        const images = await GallaryModel.find();

         return res.status(200).json({

            message:"Images Fetched Successfully",

            images

         })
    } catch (err) {

      console.log(err)

        res.status(500).json({

            error:"Something Went Wrong",

            issue:err.message

        })  

    }
}



exports.deleteImageById = async(req,res)=>{
    try {

        const {id} = req.params;

        const image = await GallaryModel.findByIdAndDelete(id);

        if(image){

            return res.status(200).json({

                message:"Delete Image Successfully"

            })
        }

        return res.status(400).json({

            error:"No such image found"

        })


    } catch (err) {
        
      console.log(err)
      
        res.status(500).json({
            
            error:"Something Went Wrong",
            
            issue:err.message
            
        })   
    }
}
