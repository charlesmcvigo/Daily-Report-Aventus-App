const mongoose = require('mongoose');

const dailyReportSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date:{
        type: Date
    },
    task:{
        type: String,
        trim: true,
        maxlength: 100
    },
    assisted_deptOrUser:{
        type: String,
        trim: true,
        maxlength: 100,
    },
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    remarks:{
        type: String,
        trim: true,
    },
},
{ timestamps: true
})

module.exports = mongoose.model('DailyReport', dailyReportSchema);