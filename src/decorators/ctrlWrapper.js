const ctrlWrapper = controller => {
  const func = async (req, res, next) => {
    try {
      await controller();
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
