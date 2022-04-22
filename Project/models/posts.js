const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema= new Schema({
title : {
    type: String,
    required: true
},
snippet : {
    type: String,
    required: true
}},
    {
        timestamps:true
    }
);

const Posts = mongoose.model('Posts',postsSchema);
module.exports = Posts;