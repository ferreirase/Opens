/* eslint-disable consistent-return */
import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    isAdmin: Yup.boolean().required(),
    login: Yup.string().required(),
    password: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res
      .status(400)
      .json({ message: 'Check the fields sent', statusCode: 400 });
  }

  next();
};
