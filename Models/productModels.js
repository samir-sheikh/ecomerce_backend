const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    name: {
        type:String,
        require: [true, "Please Enter The Product Name"],
        trim : true,

    },

    discription : {
        type:String,
        require: [true, "Please Enter The Product Detailse"]
    },

    Price : {
        type: Number,
        require: [true, "Please Enter The Product Price"],
        maxLength: [8, "Please Enter Valid Product Price"]
    },

    rating : {
        type:Number,
        default:0
    },

    images :  [ {
        
        
        public_id : {

            type : String,
            require: true,
        },

        url: {
            type: String,
            require:true,
        }



     } ] ,

     catagary: {
         type :String,
         require: [true,"Please Enter Catagery.."]
     },

     Stock : {

        type : Number,
        require:[true, "Please Enter Product Stock"],
        maxLength:[4,   "Please Enter Valid Stock Value"],
        default: 1
     },

     numberOfReview : {
         type:Number,
         default:0

     },
     review: [
         {
             name : {
                 type: String,
                 require: true,
             },
             rating: {
                 type:Number,
                 require:true

             },

             comment: {
                 type: String,
                 require: true
             }
         }
     ],

     createdAt : {
         type: Date,
         default: Date.now

     }


    
})

module.exports = mongoose.model("Products", ProductSchema );