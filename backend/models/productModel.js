import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      genericName: {
        type: String,
      },
      image: {
        type: String,
        required: true,
      },
      mfr: {
        type: String,
        required: true,
      },
      qtyPerUnit: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
      isRxRequired: {
        type: Boolean,
        required: true,
      }
    },
    {
      timestamps: true,
    }
  )
  
  const Product = mongoose.model('Product', productSchema)
  
  export default Product