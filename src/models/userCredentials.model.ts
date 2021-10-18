import mongoose from 'mongoose';

const UserCredentialsSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

export const UserCredentials = mongoose.model('UserCredentials', UserCredentialsSchema);