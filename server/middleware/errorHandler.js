export const errorHandler = (err, req, res, next) => {
  const statuscode = err.statusCode || 500;
  const msg = err.message || "something went wrong , try again.";

  return res.status(statuscode).json({ message: msg });
};
