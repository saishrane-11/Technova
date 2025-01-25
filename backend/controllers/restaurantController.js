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



export { addProduct ,removeProduct, getAllRestaurantAdmin}