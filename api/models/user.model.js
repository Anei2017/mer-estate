import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
   
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-view&psig=AOvVaw2Y6QQPp5xHTbjFTgCYw9_k&ust=1697797993168000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjGosX0gYIDFQAAAAAdAAAAABAE"
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;