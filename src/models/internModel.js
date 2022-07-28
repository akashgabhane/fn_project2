const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({


        name: {
            type: String,
            required: [true, 'please provide a username'],
            trim: true


        },


        email: {
            type: String,
            // type: mongoose.SchemaTypes.Email,
            required: [true, 'email should be present'],
            unique: true,
            trim: true,
            lowercase: true,

            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],


        },

        mobile: {
            type: Number,

            required: [true, 'mobile no is required'],

            validate: {
                validator: function(mobile) {
                    /^\d{10}$/.test(mobile);
                },
                message: "Please enter a valid mobile no",
                isAsync: false
            },
            unique: true
        },

        collegeId: {
            type: ObjectId,
            ref: 'College'
        }


    },



    // { timestamps: true }
);

module.exports = mongoose.model("intern", internSchema);