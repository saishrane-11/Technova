import { v2 as cloudinary } from "cloudinary"
import productModel from '../models/productModel.js'

const creatProductReview = async(req,res)=>{
    try{
        const productId= req.params.id;
        const {rating,comment} = req.body;
        const review = {
            rating: Number(rating),
            comment
        };
        const product = await Product.findById(productId);

        const isReviewed = product.reviews.find(
            (rev) => rev.user.toString() === req.user._id.toString()
          );
        
          if (isReviewed) {
            product.reviews.forEach((rev) => {
              if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
            });
          } else {
            product.reviews.push(review);
            product.numOfReviews = product.reviews.length;
          }
        
          let avg = 0;
        
          product.reviews.forEach((rev) => {
            avg += rev.rating;
          });
        
          product.ratings = avg / product.reviews.length;
        
          await product.save({ validateBeforeSave: false });
        
          res.status(200).json({
            success: true,
          });
    }catch{

    }
}

const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)


        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )



        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }


        console.log(productData);

        const product = new productModel(productData)
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}



const listProducts = async (req, res) => {
    try {

        const products = await productModel.find({});
        res.json({ success: true, products })
        // console.log("List items displayed")

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }


}


const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({ success: true, product })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}



export { listProducts, addProduct, removeProduct, singleProduct ,creatProductReview}