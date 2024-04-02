const bcrypt = require("bcrypt");
const UserModel = require("./user.model");
const { ERROR_CODES } = require('../../lib/error/errorCodes')
const jwt = require("../../lib/auth/jwt");

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) throw new Error(ERROR_CODES.USER_ALREADY_EXISTS);

  const hashedPassword = await bcrypt.hash(password, process.env.SALT);
  await UserModel.create({ email, password: hashedPassword });
  const tokens = await getTokens(newUser);
  return res.status(201).json(tokens);
};

exports.Register = async (req, res) => {
  const user = await UserModel.findOne({ email });
  if (user) throw new Error(ERROR_CODES.USER_ALREADY_EXISTS);
  const { email, password } = req.body;
  const newUser = new UserModel(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  newUser.password = hashedPassword;
  await UserModel.create({ email, password: hashedPassword });
  const tokens = await getTokens(newUser)
  return res.status(201).json(tokens);
};
