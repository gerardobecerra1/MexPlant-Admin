const ClassificationReducer = (state, action) => {
  switch (action.type) {
    //Get
    case "GET_CLASSIFICATIONS_START":
      return {
        classifications: [],
        isFetching: true,
        error: false,
      };
    case "GET_CLASSIFICATIONS_SUCCESS":
      return {
        classifications: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_CLASSIFICATIONS_FAILURE":
      return {
        classifications: [],
        isFetching: false,
        error: true,
      };

    //Create
    case "CREATE_CLASSIFICATION_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_CLASSIFICATION_SUCCESS":
      return {
        classifications: [...state.classifications, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_CLASSIFICATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Update
    case "UPDATE_CLASSIFICATION_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_CLASSIFICATION_SUCCESS":
      return {
        classifications: state.classifications.map(
          (classification) =>
            classification._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_CLASSIFICATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Delete
    case "DELETE_CLASSIFICATION_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_CLASSIFICATION_SUCCESS":
      return {
        classifications: state.classifications.filter(
          (classification) => classification._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "DELETE_CLASSIFICATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ClassificationReducer;
