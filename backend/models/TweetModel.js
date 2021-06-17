import pkg from 'mongoose';

const {model, Schema} = pkg;

const TweetSchema = new Schema({
    text: {
        required: true,
        type: String,
    },
    user: {
        required: true,
        ref: 'User',
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true
});

export const TweetModel = model('Tweet', TweetSchema);