import ActiviteRecyclage from "../Models/ActiviteRecyclage.js";

export const getActivite = async () => {
  return ActiviteRecyclage.find();
};

export const addActivite = async (activite) => {
  return await ActiviteRecyclage.create(activite);
};

export const getActiviteById = async (id) => {
  return ActiviteRecyclage.findById(id);
};

export const updateActivite = async (id, activiteBody) => {
  const activite = await getActiviteById(id);
  if (!activite) {
    throw new Error("no activite found");
  }
  Object.assign(activite, activiteBody);
  return await activite.save();
};
export const getActivitiesByUserId = async (userId) => {
  console.log(userId);
  try {
    const activities = await ActiviteRecyclage.find({ user: userId });
    return activities;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteActivite = async (id) => {
  if (!id) {
    throw new Error("no id found");
  }
  return await ActiviteRecyclage.findOneAndDelete({ _id: id });
};

export const getMaterialStatistics = async () => {
  try {
    const statistics = await ActiviteRecyclage.aggregate([
      {
        $group: {
          _id: "$recyclableMaterial",
          count: { $sum: 1 },
        },
      },
    ]);
    return statistics;
  } catch (error) {
    throw error;
  }
};
