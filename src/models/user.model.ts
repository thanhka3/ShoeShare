import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, maxlength: 10, minlength: 10, required: true, unique: true },
    birth: { type: Date },
    isDeleted: { type: Boolean, default: false },
    img: { type: String },
    address: { type: String },
    gender: { type: Number }, // 1 : Male / -1 : Female / 0: Other
    userType: { type: String, required: true }
}, {
    timestamps: true
});

export const User = mongoose.model('User', UserSchema);