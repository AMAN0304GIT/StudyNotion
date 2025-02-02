const Course = require("../models/Course");
const RatingAndReview = require("../models/RatingandReview");
const mongoose = require("mongoose")

// create rating
exports.createRating = async(req,res)=>{
    try{


        // get user id
        const userId = req.user.id;
        // fetch data from req body
        const {rating,review,courseId} = req.body;

        // check if user is enrolled or not
        const courseDetails = await Course.findOne({
            _id:courseId,
            studentsEnrolled:{$elemMatch:{$eq:userId}},
        });
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Student is not enrolled in this course",
            })
        }


        // check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,
            course:courseId,
        });
        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"Course is already reviewed by the user",
            });
        }
        // create rating and review
        const ratingReview = await RatingAndReview.create({
            rating,review,
            course:courseId,
            user:userId,
        });
        // update course with the review/rating
        await updatedCourseDetails.findByIdAndUpdate({_id:courseId},
            {
                $push:{
                    ratingAndReviews:ratingReview._id,
                }
            },
            {new:true});
            console.log(updatedCourseDetails);
        // return response
        return res.status(200).json({
            success:true,
            message:"rating and review created successfully",
            ratingReview,
        })


    }
    catch(error){
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message,
        })
    }
}   
// Get the average rating for a course
exports.getAverageRating = async (req, res) => {
    try {
      const courseId = req.body.courseId
  
      // Calculate the average rating using the MongoDB aggregation pipeline
      const result = await RatingAndReview.aggregate([
        {
          $match: {
            course: new mongoose.Types.ObjectId(courseId), // Convert courseId to ObjectId
          },
        },
        {
          $group: {
            _id: null,
            averageRating: { $avg: "$rating" },
          },
        },
      ])
  
      if (result.length > 0) {
        return res.status(200).json({
          success: true,
          averageRating: result[0].averageRating,
        })
      }
  
      // If no ratings are found, return 0 as the default rating
      return res.status(200).json({ success: true, averageRating: 0 })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve the rating for the course",
        error: error.message,
      })
    }
  }
  
  // Get all rating and reviews
  exports.getAllRatingReview = async (req, res) => {
    try {
      const allReviews = await RatingAndReview.find({})
        .sort({ rating: "desc" })
        .populate({
          path: "user",
          select: "firstName lastName email image", // Specify the fields you want to populate from the "Profile" model
        })
        .populate({
          path: "course",
          select: "courseName", //Specify the fields you want to populate from the "Course" model
        })
        .exec()
  
      res.status(200).json({
        success: true,
        data: allReviews,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve the rating and review for the course",
        error: error.message,
      })
    }
  }
  