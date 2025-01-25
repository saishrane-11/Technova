import express from 'express'
import authUser from '../middleware/auth.js';
// import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
import {getSingleBooking, newOrder} from '../controllers/bookingController.js'

const bookingRoutes = express.Router()

bookingRoutes.post('/createBooking',authUser,newOrder);
bookingRoutes.get('/getSingleBooking/:id',authUser,getSingleBooking)

export default bookingRoutes