import ActiviteRating from "../Models/ActiviteRating.js";

export const addRatingActivite = async ({
  rating,
  comment,
  user,
  activite,
}) => {
  return await ActiviteRating.create({
    rating,
    comment,
    user,
    activite,
  });
};
