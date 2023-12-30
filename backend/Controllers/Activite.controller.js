import * as ActiviteService from "../service/Activite.service.js";

export const getActivites = async (req, res) => {
  try {
    const activite = await ActiviteService.getActivite();
    if (!activite) {
      throw new Error("activite not found");
    }
    res.status(200).json(activite);
    console.log(activite);
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

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

export const updateActivite = async (req, res) => {
  try {
    const activite = await ActiviteService.updateActivite(
      req.params.id,
      req.body
    );
    res.status(200).send(activite);
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

export const getActivite = async (req, res) => {
  try {
    const activite = await ActiviteService.getActiviteById(req.params.id);
    if (!activite) {
      throw new Error("activite not found");
    }
    res.send(activite);
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

export const deleteActivite = async (req, res) => {
  const id = req.params.id;
  try {
    await ActiviteService.deleteActivite(id);
    res.status(200).json({ message: "Activite deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

export const getActivitiesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const activities = await ActiviteService.getActivitiesByUserId(userId);
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const getMaterialStatistics = async (req, res) => {
  try {
    const statistics = await ActiviteService.getMaterialStatistics();
    res.json(statistics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
