// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: 'Server error',
  });
};

export default errorHandler;
