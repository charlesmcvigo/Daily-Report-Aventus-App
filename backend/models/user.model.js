const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            trim: true,
            required: true,
            maxslength: 50,
        },
        lastname:{
            type: String,
            trim: true,
            required: true,
            maxslength: 50,
        },
        middlename:{
            type: String,
            trim: true,
            maxslength: 50,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false,
        },
        role: {
            type: String,
            enum: [, 'user', 'admin','superadmin'],
            default: 'user',
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('User', userSchema);