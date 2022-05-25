//GET
export const getPlantsStart = () => ({
  type: "GET_PLANTS_START",
});

export const getPlantsSuccess = (plants) => ({
  type: "GET_PLANTS_SUCCESS",
  payload: plants,
});

export const getPlantsFailure = () => ({
  type: "GET_PLANTS_FAILURE",
});

//CREATE
export const createPlantStart = () => ({
  type: "CREATE_PLANTS_START",
});

export const createPlantSuccess = (plant) => ({
  type: "CREATE_PLANTS_SUCCESS",
  payload: plant,
});

export const createPlantFailure = () => ({
  type: "CREATE_PLANTS_FAILURE",
});

//UPDATE
export const updatePlantStart = () => ({
  type: "UPDATE_PLANT_START",
});

export const updatePlantSuccess = (plant) => ({
  type: "UPDATE_PLANT_SUCCESS",
  payload: plant,
});

export const updatePlantFailure = () => ({
  type: "UPDATE_PLANT_FAILURE",
});

//Delete
export const deletePlantsStart = () => ({
  type: "DELETE_PLANTS_START",
});

export const deletePlantsSuccess = (id) => ({
  type: "DELETE_PLANTS_SUCCESS",
  payload: id,
});

export const deletePlantsFailure = () => ({
  type: "DELETE_PLANTS_FAILURE",
});
