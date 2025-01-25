import express from 'express'
import { addProduct,getAllRestaurantAdmin,removeProduct }  from '../controllers/restaurantController.js'
import authUser from '../middleware/auth.js';
// import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const restRouter = express.Router()

// restaurantRouter.route('/add').post(newPr);
restRouter.post('/add',adminAuth,addProduct);
restRouter.post('/remove/:id',adminAuth,removeProduct);

restRouter.get('/getAllRestaurantAdmin',adminAuth,getAllRestaurantAdmin);

// productRouter.post('/single',singleProduct)
// productRouter.get('/list',listProducts)


export default restRouter;