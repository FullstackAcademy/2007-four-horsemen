// middleware for verification of user for admin privileges

const isAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).send({ message: 'THIS USER IS NOT AUTHORIZED' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = isAdmin;
