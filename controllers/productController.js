
const Apifeature = require('../Utils/ApiFeature');
const { countDocuments } = require('./../Models/productModels');
const Product = require('./../Models/productModels');



//creat Products -- admin raout

exports.creatProduct =  async (req , res, next) => {

    const product = await Product.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
}

//All product details

exports.getAllproduct = async(req, res) => {

    const resultPerPage = 5;
    const productCount = await countDocuments();

    //serch the Product
  const apiFeature = new Apifeature(Product.find(),req.query)
  .serch()
  .filter()
  .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
        productCount
    })
}




//update product -- only admin

exports.updateProduct= async(req, res, next) => {
    
    let product = await Product.findById(req.params.id)

    if(!product) {
        if(!product){
            res.status(400).json("Product Not Found")
        }
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
}


//delate Product by id

exports.delateProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if(!product){
        if(!product){
           res.status(400).json("Product Not Found")
        }
    }

    await product.remove()
    res.status(200).json({
        success:true,
        massgae:"The Product delete Sucessfully"
    })
}


//get Perticuller Product

exports.getDetails = async(req , res , next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400).json("Product Not Found")
    }

   
    res.status(200).json({
        success:true,
        product
    })
}



exports.test = (req, res) => {

    res.status(200).json({
        "massgae" :"Test Raouts working Properly"
    })
}