import autocorrect from "autocorrect"
export default (req, res) => {
  res
    .status(200)
    .json({ correctedWord: autocorrect(req.query.word.toLowerCase()) });
};
