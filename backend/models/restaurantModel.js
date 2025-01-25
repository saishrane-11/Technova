import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }
    },
    cuisine: {
        type: Array,
        required: true
    },
    ratings: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],

})

const restaurantModel = mongoose.models.product || mongoose.model("restaurant", restaurantSchema)

export default restaurantModel;