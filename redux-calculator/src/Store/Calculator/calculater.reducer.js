const init = { count: 0 };

export const calculaterReducer = (state = init, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD": {
      return {
        count: state.count + (payload || 1)
        // count : state.count + (Number(Object.values((payload))) || 1)
      };
    }
    case "SUBTRACT": {
      return {
        count: state.count - (payload || 1)
      };
    }
    case "MULT": {
      return {
        count: state.count * (payload || 1)
      };
    }
    case "DIV": {
      return {
        count: state.count / (payload || 1)
      };
    }
    default: {
      return state;
    }
  }
};
