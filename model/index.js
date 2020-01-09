// model
const mongoose=require('mongoose')
mongoose.Promise=require('q').Promise;
let AlbumSchema={
    album_id:String,
    album_name:String,
    price:Number,
    week:Number,
    public_time:String,
    cover:String,
    singers:Array
}
let Customer={name:String,password:String,score:Number}

mongoose.model("Album",AlbumSchema)
mongoose.model("Customer",Customer)


