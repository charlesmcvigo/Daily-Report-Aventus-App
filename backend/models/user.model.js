const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            trim: true,
            required: true,
            maxlength: 30,
        },
        lastname:{
            type: String,
            trim: true,
            required: true,
            maxslength: 30,
        },
        middlename:{
            type: String,
            trim: true,
            maxlength: 30,
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