const PlantReducer = (state, action) => {
  switch (action.type) {
    //Get
    case "GET_PLANTS_START":
      return {
        plants: [],
        isFetching: true,
        error: false,
      };
    case "GET_PLANTS_SUCCESS":
      return {
        plants: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_PLANT_FAILURE":
      return {
        plants: [],
        isFetching: false,
        error: true,
      };

    //Create
    case "CREATE_PLANT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_PLANT_SUCCESS":
      return {
        plants: [...state.plants, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_PLANTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Update
    case "UPDATE_PLANT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_PLANT_SUCCESS":
      return {
        plants: state.plants.map(
          (plant) => plant._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_PLANT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Delete
    case "DELETE_PLANTS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_PLANTS_SUCCESS":
      return {
        plants: state.plants.filter((plant) => plant._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_PLANTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default PlantReducer;
