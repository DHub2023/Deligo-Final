const mongoose = require ('mongoose');

const UserSchema= new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    refer:{
        type: String,
    },
},{ timestamps:true });

export default mongoose.model("User", UserSchema);

