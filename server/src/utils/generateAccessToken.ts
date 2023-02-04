import jwt from 'jsonwebtoken';

const generateAcessToken = (email: string) => {
  return jwt.sign({ email }, process.env.JWT_SECRET as string, {
    expiresIn: '2h',
  });
};

export default generateAcessToken;
