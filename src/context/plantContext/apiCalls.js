import axios from "axios";
import {
  createPlantFailure,
  createPlantStart,
  createPlantSuccess,
  deletePlantsFailure,
  deletePlantsStart,
  deletePlantsSuccess,
  getPlantsFailure,
  getPlantsStart,
  getPlantsSuccess,
  updatePlantFailure,
  updatePlantStart,
  updatePlantSuccess,
} from "./PlantActions";

export const getPlants = async (dispatch) => {
  dispatch(getPlantsStart());
  try {
    const res = await axios.get("https://mexplant-api.herokuapp.com/api/search/plants", {
      headers: { "x-token": JSON.parse(localStorage.getItem("user")).token },
    });
    // console.log(res.data.results);
    dispatch(getPlantsSuccess(res.data.results));
  } catch (error) {
    dispatch(getPlantsFailure());
  }
};

export const createPlant = async (plant, dispatch) => {
  dispatch(createPlantStart());
  try {
    const res = await axios.post("https://mexplant-api.herokuapp.com/api/plants", plant, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-token": JSON.parse(localStorage.getItem("user")).token,
      },
    });
    console.log(res);
    dispatch(createPlantSuccess(res.data));
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch(createPlantFailure());
  }
};

export const updatePlant = async (plant, dispatch) => {
  dispatch(updatePlantStart());
  try {
    console.log(plant);
    const res = await axios.put(
      "https://mexplant-api.herokuapp.com/api/plants/" + plant.id,
      plant,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-token": JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    console.log(res);
    dispatch(updatePlantSuccess(res.data));
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch(updatePlantFailure());
  }
};

export const deletePlant = async (id, dispatch) => {
  dispatch(deletePlantsStart());
  try {
    await axios.delete("https://mexplant-api.herokuapp.com/api/plants/" + id, {
      headers: { "x-token": JSON.parse(localStorage.getItem("user")).token },
    });
    // console.log(res.data.results);
    dispatch(deletePlantsSuccess(id));
  } catch (error) {
    dispatch(deletePlantsFailure());
  }
};
