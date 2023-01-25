interface IActionRootReducer {
  type: string;
}

interface IStateRootReducer {
  name: string;
}

const initialStore: IStateRootReducer = {
  name: '',
};

const rootReducer = (state = initialStore, action: IActionRootReducer) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return state;

    default:
      return state;
  }
};

export default rootReducer;
