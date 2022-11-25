import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profileId: {
        type: String,
    },
    // nick: {
    //     type: String,
    //     default: "Pls. input your nickaname",
    // },
    // fullname: {
    //     type: String,
    //     default: "Input full name for support",
    // },
    // email: {
    //     type: String,
    //     default: "Your e-mail for contact",
    // },
    bio: {
        type: String,
        default: "Input a little about yourself :)",
    },
}, { timestamps: true });

let Users = mongoose.models.users || mongoose.model("users", userSchema);

export default Users;