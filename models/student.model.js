const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    stuid: {
        type:Number,
        required: 'This field is required'
    },
    fullname: {
        type:String,
        required: 'This field is required'
    },
    email: {
        type:String,
        required: 'This field is required'
    },
    mobile: {
        type: Number,
        required: 'This field is required'
    },
    city: {
        type:String,
        required: 'This field is required'
    },
    state: {
        type:String,
        required: 'this field is required'
    },
    course: {
        type:String,
        required: 'This field is required'
    },
    mark1: {
        type:Number,
        required: 'This field is required'
    },
    mark2: {
        type:Number,
        required: 'This field is required'
    },
    mark3: {
        type:Number,
        required: 'This field is required'
    },
    

});

mongoose.model('Student',studentSchema);