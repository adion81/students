const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Books require titles yo."]
    },
    subject:{
        type:String
    }
},{timestamps:true})

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true,"First name is required"],
        minlength : [2,"First name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required:[true,"Last name is required"],
        minlength : [2,"Last name must be at least 2 characters"]
    },
    age:{
        type:Number,
        required : [true,"Age is required"],
        min:[14,"A student must be at least 14 years old"]
    },
    books : [BookSchema]

},{timestamps:true})

const Book = mongoose.model("Book",BookSchema);
const Student = mongoose.model("Student",StudentSchema);



module.exports.Student = Student;
module.exports.Book = Book;