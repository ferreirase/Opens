/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import User from '../models/User';
import mongoose from '../../../node_modules/mongoose';

class UserController {
  async createUser(req, res) {
    try {
      const requestingUser = await User.findById(req.userID);

      if (!requestingUser.isAdmin) {
        return res.status(401)
          .json({
            message: 'Only Admin can create and delete users!', statusCode: 401,
          });
      }

      const { email } = req.body;
      if (await User.findOne({ email })) {
        return res.status(400)
          .send({ message: 'User already registered!', statusCode: 400 });
      }

      const newUser = await User.create(req.body);
      newUser.password = undefined;

      return res.send({ newUser });
    } catch (error) {
      return res.status(500)
        .send({ message: 'Registration failed!', statusCode: 500 });
    }
  }

  async getUser(req, res) {
    const user = await User.findById(req.userID);

    if (!user) {
      return res.status(400)
        .json({ message: 'User not found', statusCode: 400 });
    }

    user.isAdmin = undefined;

    return res.status(200).send({ user });
  }

  async updateUser(req, res) {
    try {
      const {
        login, name, email, password, newPassword,
      } = req.body;

      if (!await User.findById(req.userID)) {
        return res.status(400)
          .json({ message: 'User not found', statusCode: 400 });
      }

      await User.updateOne({ _id: req.userID }, {
        $set: {
          login,
          name,
          password: newPassword === password ? password : newPassword,
          email,
        },
      });

      const user = await User.findById(req.userID);

      user.isAdmin = undefined;

      return res.status(200).send({ user });
    } catch (error) {
      return res.status(500)
        .send({ message: `Could not update user: ${error}`, statusCode: 500 });
    }
  }

  async deleteUser(req, res) {
    const requestingUser = await User.findById(req.userID);

    if (!requestingUser) {
      return res.status(400)
        .json({
          message: 'User not found!', statusCode: 400,
        });
    }

    if (!requestingUser.isAdmin) {
      return res.status(401)
        .json({
          message: 'Only Admin can create and delete users!', statusCode: 401,
        });
    }

    if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
      return res.status(400)
        .json({ message: 'Invalid ID informed!', statusCode: 400 });
    }

    if (!await User.findById(req.query.id)) {
      return res.status(400)
        .json({ message: 'User not found!', statusCode: 400 });
    }

    await User.deleteOne({ _id: req.query.id });

    return res.status(200)
      .json({ message: 'User deleted!', statusCode: 200 });
  }
}

export default new UserController();
