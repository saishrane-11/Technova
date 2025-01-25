import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
// import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import restaurantRouter from './routes/restaurantRouter.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'
const app = express()
const port = process.env.PORT || 3001
connectDB()
// connectCloudinary()

app.use(express.json())
// app.use(cors())


app.use('/api/user', userRouter)
app.use('/api/restaurant', restaurantRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
  res.send('Api Working')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})