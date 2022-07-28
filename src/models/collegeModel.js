const mongoose = require("mongoose");


const collegeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'plese enter college'],
            trim: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: [true, 'Do not forget fullname'],
            trim: true
        },

        logoLink: {
            type: String,
            required: [true, 'link is mandatory']
        },


        isDeleted: {

            type: Boolean,
            default: false
        }
    }
    // ,{ timestamps: true }
);

module.exports = mongoose.model("college", collegeSchema);