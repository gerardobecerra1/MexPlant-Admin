import axios from "axios";
import {
  createClassificationStart,
  createClassificationSuccess,
  createClassificationFailure,
  deleteClassificationStart,
  deleteClassificationSuccess,
  deleteClassificationFailure,
  getClassificationsStart,
  getClassificationsSuccess,
  getClassificationsFailure,
  updateClassificationStart,
  updateClassificationSuccess,
  updateClassificationFailure,
} from "./ClassificationActions";

export const getClassifications = async (dispatch) => {
  dispatch(getClassificationsStart());
  try {
    const res = await axios.get(
      "https://mexplant-api.herokuapp.com/api/search/classifications",
      {
        headers: { "x-token": JSON.parse(localStorage.getItem("user")).token },
      }
    );
    // console.log(res.data.results);
    dispatch(getClassificationsSuccess(res.data.results));
  } catch (error) {
    dispatch(getClassificationsFailure());
  }
};

export const createClassification = async (classification, dispatch) => {
  dispatch(createClassificationStart());
  try {
    const res = await axios.post(
      "https://mexplant-api.herokuapp.com/api/classifications",
      classification,
      {
        headers: {
          "x-token": JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    console.log(res);
    dispatch(createClassificationSuccess(res.data));
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch(createClassificationFailure());
  }
};

export const updateClassification = async (classification, dispatch) => {
  dispatch(updateClassificationStart());
  try {
    const res = await axios.put(
      "https://mexplant-api.herokuapp.com/api/classifications/" + classification.id,
      classification,
      {
        headers: {
          "x-token": JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    console.log(res);
    dispatch(updateClassificationSuccess(res.data));
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch(updateClassificationFailure());
  }
};

export const deleteClassification = async (id, dispatch) => {
  dispatch(deleteClassificationStart());
  try {
    await axios.delete("https://mexplant-api.herokuapp.com/api/classifications//" + id, {
      headers: { "x-token": JSON.parse(localStorage.getItem("user")).token },
    });
    // console.log(res.data.results);
    dispatch(deleteClassificationSuccess(id));
  } catch (error) {
    dispatch(deleteClassificationFailure());
  }
};
