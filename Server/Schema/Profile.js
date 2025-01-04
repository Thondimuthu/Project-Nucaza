import mongoose from "mongoose";





const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String },
  state: { type: String },
  postalCode: { type: String },
  address: { type: String },
  
  // Employee Information
  employeeId: { type: String, required: true, unique: true },
  officeMail: { type: String, required: true, unique: true },
  officePhone: { type: String },
  position: { type: String },
  department: { type: String },

  // Education Information
  degrees: [{
    degree: { type: String },
    university: { type: String },
    year: { type: String }
  }],

  // Additional fields
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
profileSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
