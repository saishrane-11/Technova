// import bookingModel from "../models/bookingModel";
// import restaurantModel from '../models/restaurantModel.js'
import bookingModel from '../models/bookingModel.js'
const newOrder = async(req,res)=>{
    const {bookingItems,paymentInfo,paidAt,totalPrice,bookingStatus} = req.body;

    const booking = await bookingModel.create({
        user:req.body.userId,
        bookingItems,
        paymentInfo,
        paidAt,
        totalPrice,
        bookingStatus
    })
    res.status(200).json({
        success:true,
        booking
    })
}

const getSingleBooking = async(req,res)=>{
    const booking = await bookingModel.findById(req.params.id);
    if(!booking){
        res.status(404).json({
            success:false,
        })
    }
    res.status(200).json({
        success:true,
        booking
    })
}
export { newOrder, getSingleBooking}