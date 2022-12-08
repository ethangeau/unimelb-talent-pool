import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  avatar: String,
  firstName: String,
  lastName: String,
  role: String,
  email: String,
  introduction: String,
  personalSite: String,
  linkedin: String,
  github: String,
  instagram: String,
  recommendations: {
    type: [String],
    default: [],
  },
  userID: String,
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
