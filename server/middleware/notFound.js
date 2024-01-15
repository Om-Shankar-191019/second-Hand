export const notFound = (req, res, next) => {
  return res.status(404).json("Route does not exist.");
};
