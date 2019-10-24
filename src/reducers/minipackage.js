const initialState = {
    miniPackages: []
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "REFRESH_TODOS":
        return {
          ...state,
          todos: payload,
          isOnlyActive: false
        };
      default:
        return state;
    }
  }
  