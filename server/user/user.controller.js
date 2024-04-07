const bcrypt = require("bcrypt");
const UserModel = require("./user.model");
const { ERROR_CODES } = require('../../lib/error/errorCodes')
const jwt = require("../../lib/auth/jwt");
const { success } = require("../../lib/auth/res")

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) throw new Error(ERROR_CODES.USER_ALREADY_EXISTS);

  const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
  await UserModel.create({ email, password: hashedPassword });
  const data = {
    accessToken: jwt.generateAccessToken({ email }),
    refreshToken: jwt.generateRefreshToken({ email })
  }
  return success(res, data)
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error(ERROR_CODES.NOT_FOUND);
  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw new Error(ERROR_CODES.UNAUTHORIZED)
  const data = {
    accessToken: jwt.generateAccessToken({ email }),
    refreshToken: jwt.generateRefreshToken({ email })
  }
  return success(res, data)
};

exports.Me = async (req, res) => {
  const { email } = req.params;
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error(ERROR_CODES.NOT_FOUND);
  return success(res, user)
};

exports.Refresh = async (req, res) => {
  const { email } = req.user
  const data = {
    accessToken: jwt.generateAccessToken({ email }),
    refreshToken: jwt.generateRefreshToken({ email })
  }
  return success(res, data)
};