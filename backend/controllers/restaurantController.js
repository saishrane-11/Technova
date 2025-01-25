// import { v2 as cloudinary } from "cloudinary"
import restaurantModel from '../models/restaurantModel.js'


const addProduct = async (req, res) => {
    try {



        console.log(req.body)

        const restaurant = await restaurantModel.create(req.body);
        res.status(201).json({
            success: true,
            restaurant
        })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const getAllRestaurantAdmin = async (req,res)=>{
    try{
        const restaurants = await restaurantModel.find();
        res.status(200).json({
            success:true,
            restaurants
        })
    }catch(error){
        res.json({ success: false, message: error.message })
    }
}

//get restaurant details
const getRestaurantDetails = async(req,res)=>{
    try{
        const restaurant = await restaurantModel.findById(req.params.id);
        if(!restaurant){
            return res.json({
                success:false
            })
        }
        res.status(200).json({
            success:true,
            restaurant
        })
    }catch(error){
        res.json({ success: false, message: error.message })
    }
}


//updateRestaurant
const updateRestaurant = async(req,res)=>{
    try{
        console.log(req.params.id)
        let restaurant = await restaurantModel.findById(req.params.id);
        if(!restaurant){
            return res.status(404).json({
                success:false,
                message:"No restaurant found"
            })
        }
        restaurant = await restaurantModel.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false,
        })
        res.status(200).json({
            success:true,
            restaurant
        })

    }catch(error){  
        res.json({
            success:false,
            message:"error occured while updating"
        })
    }
}
// const listProducts = async (req, res) => {
//     try {


//         const products = await productModel.find({});
//         res.json({ success: true, products })
//         // console.log("List items displayed")

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }


// }


const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: "Product removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// const singleProduct = async (req, res) => {
//     try {
//         const { productId } = req.body
//         const product = await productModel.findById(productId)
//         res.json({ success: true, product })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

const createRestaurantReview = async(req,res)=>{
    try{
        const {rating,comment,restaurantId} = req.body;
        const review={
            user:req.body.userId,
            rating:Number(rating),
            comment
        }
        const restaurant = await restaurantModel.findById(restaurantId);
        const isReviewd = restaurant.reviews.find(
            (rev)=> rev.user.toString() === req.body.userId.toString()
        )
        if(isReviewd){
            restaurant.reviews.forEach((rev)=>{
                if(rev.user.toString()===req.body.userId.toString())
                (rev.rating=rating), (rev.comment=comment)
            });
        }else{
            restaurant.reviews.push(review);
            restaurant.numOfReviews = restaurant.reviews.length;
        }
        let avg = 0;

        restaurant.reviews.forEach((rev)=>{
            avg+=rev.rating;
        });
        restaurant.ratings = avg/restaurant.reviews.length;

        await restaurant.save({validateBeforeSave:false});
        res.status(200).json({
            success:true,

        })
    }catch(error){
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addProduct ,removeProduct, getAllRestaurantAdmin, getRestaurantDetails,updateRestaurant,createRestaurantReview}