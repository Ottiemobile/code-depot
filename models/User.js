const { Schema, model } = require('mongoose');

const userSchema = new Schema(

    {
        username: {
            type: String,
            Required: true,
            unique : true,
            trim : true
        },

        email: {
            type: String,
            match: [/.+@.+\..+/, 'failed to match an email address. please try again'],
            required: true,
            unique: true
            
        },


        Snips: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Snip'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,

        },
        id: false
    }
);

const User = model('User', userSchema);

module.exports = User;