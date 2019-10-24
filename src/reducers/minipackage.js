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
      case "ADD_PACKAGE":
        return {
          ...state,
          minipackages: [...state.minipackages, payload]
        }
      default:
        return state;
    }
}
  