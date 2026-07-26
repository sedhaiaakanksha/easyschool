export const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const role = req.user.role;

      if (!allowedRoles.includes(role)) {
        return res
          .status(403)
          .json({ error: "Not authorized for this action" });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};
