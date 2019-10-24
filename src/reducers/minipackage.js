const initialState = {
  minipackages: []
  };
  
export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "REFRESH_PACKAGES":
        return {
          ...state,
          minipackages: payload
        };
      default:
        return state;
    }
}
  