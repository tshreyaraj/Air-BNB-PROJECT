// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const listingSchema=new Schema({
//     title:{
//     type:String,
//     required:true,
//     },
//     description:String,
//     image:
//     {
//         url:{type:String,
//         default:
//             "https://unsplash.com/photos/a-tree-silhouetted-against-a-sunset-sky-AuVYd7aR5a4",

       
//         set: (v)=>v===""?"https://unsplash.com/photos/a-tree-silhouetted-against-a-sunset-sky-AuVYd7aR5a4":v,
//     }, 
//     } ,  
//     price:Number,
//     location:String,
//     country:String,
// });
// const Listing=mongoose.model("Listing",listingSchema);
// module.exports=Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/a-tree-silhouetted-against-a-sunset-sky-AuVYd7aR5a4",
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },
  price: Number,
  location: String,
  country: {
    type:String,
    required:true,
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

