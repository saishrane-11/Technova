import express from 'express'
import { addProduct,createRestaurantReview,getAllRestaurantAdmin,getRestaurantDetails,removeProduct, updateRestaurant }  from '../controllers/restaurantController.js'
import authUser from '../middleware/auth.js';
// import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const restRouter = express.Router()

// restaurantRouter.route('/add').post(newPr);
restRouter.post('/add',adminAuth,addProduct);
restRouter.post('/remove/:id',adminAuth,removeProduct);

restRouter.get('/getAllRestaurantAdmin',adminAuth,getAllRestaurantAdmin);
restRouter.get('/getRestaurantDetails/:id',authUser, getRestaurantDetails );
restRouter.put('/updateRestaurant/:id',adminAuth,updateRestaurant)
restRouter.get('/getRestaurantDetails/:id',adminAuth,getRestaurantDetails);
restRouter.put('/createRestaurantReview',authUser,createRestaurantReview)
// productRouter.post('/single',singleProduct)
// productRouter.get('/list',listProducts)


export default restRouter;