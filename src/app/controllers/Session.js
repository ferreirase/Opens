/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import hashConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async auth(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
      return res.status(400)
        .send({ message: 'User not found!', statusCode: 400 });
    }

    if ((password === user.password) === false) {
      return res.status(400)
        .send({ message: 'Incorret password!', statusCode: 400 });
    }

    user.password = undefined;

    const token = await jwt.sign({ id: user.id }, hashConfig.secret, {
      expiresIn: hashConfig.expiresIn,
    });

    req.userID = token;

    return res.json({ user, token });
  }
}

export default new SessionController();
