import pkg from 'mongoose';

const {model, Schema} = pkg;

const UserSchema = new Schema({
    email: {
        unique: true,
        required: true,
        type: String
    },
    fullname: {
        required: true,
        type: String
    },
    username: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    confirmedHash: {
        required: true,
        type: String
    },
    location: String,
    confirmed: Boolean,
    about: String,
    website: String
}, {
    timestamps: true
});

UserSchema.set('toJSON', {
    transform: function(_, obj) {
        delete obj.password;
        delete obj.confirmedHash;
        return obj;
    }
});


export const UserModel = model('User', UserSchema);