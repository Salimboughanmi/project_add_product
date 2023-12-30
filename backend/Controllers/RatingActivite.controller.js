import * as RatingActivite from "../service/RatingActivite.route.js";
export const addActivite = async (req, res) => {
  try {
    const activite = await ActiviteService.addActivite(req.body);
    res.status(200).send(activite);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
};
export const createRating = async (req, res) => {
  try {
    const { rating, comment, user, activite } = req.body;
    const newRating = await RatingActivite.addRatingActivite({
      rating,
      comment,
      user,
      activite,
    });

    res.status(201).json(newRating);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
