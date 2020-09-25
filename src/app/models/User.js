// import bcrypt from 'bcryptjs';
import mongoose from '../../database/index';

const { Schema } = mongoose;

const UserSchema = new Schema({
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  login: {
    type: String,
    required: true,
    max: 100,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    max: 100,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/*
// eslint-disable-next-line func-names
UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 8);
  this.password = hash;

  next();
}); */

const User = mongoose.model('User', UserSchema);

export default User;
