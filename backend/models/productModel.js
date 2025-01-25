import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    bestSeller: {
        type: Boolean,
        default: true
    },
    date: {
        type: Number,
        required: true
    },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: "user",
    //             required: true
    //         },
    //         rating: {
    //             type: String,
    //             required: true,
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     },

    // ]
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel;