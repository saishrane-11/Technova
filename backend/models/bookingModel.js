
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    bookingItems: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            noOfSeats: {
                type: Number,
                required: true
            },
            restaurant: {
                type: mongoose.Schema.ObjectId,
                ref: "restaurant",
                required: true
            }
        }
    ],
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true
        }
    },
    paidAt: {
        type: Date,
        required: true,
    },
 
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    bookingStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { minimize: false })

const bookingModel = mongoose.models.booking || mongoose.model("booking", bookingSchema)

export default bookingModel;