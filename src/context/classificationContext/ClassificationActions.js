//GET
export const getClassificationsStart = () => ({
  type: "GET_CLASSIFICATIONS_START",
});

export const getClassificationsSuccess = (classifications) => ({
  type: "GET_CLASSIFICATIONS_SUCCESS",
  payload: classifications,
});

export const getClassificationsFailure = () => ({
  type: "GET_CLASSIFICATIONS_FAILURE",
});

//CREATE
export const createClassificationStart = () => ({
  type: "CREATE_CLASSIFICATION_START",
});

export const createClassificationSuccess = (classification) => ({
  type: "CREATE_CLASSIFICATION_SUCCESS",
  payload: classification,
});

export const createClassificationFailure = () => ({
  type: "CREATE_CLASSIFICATION_FAILURE",
});

//UPDATE
export const updateClassificationStart = () => ({
  type: "UPDATE_CLASSIFICATION_START",
});

export const updateClassificationSuccess = (classification) => ({
  type: "UPDATE_CLASSIFICATION_SUCCESS",
  payload: classification,
});

export const updateClassificationFailure = () => ({
  type: "UPDATE_CLASSIFICATION_FAILURE",
});

//Delete
export const deleteClassificationStart = () => ({
  type: "DELETE_CLASSIFICATION_START",
});

export const deleteClassificationSuccess = (id) => ({
  type: "DELETE_CLASSIFICATION_SUCCESS",
  payload: id,
});

export const deleteClassificationFailure = () => ({
  type: "DELETE_CLASSIFICATION_FAILURE",
});
