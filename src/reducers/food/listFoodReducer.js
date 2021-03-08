var init = { list: [], total: 0 };
const listFoodReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.productObj;
    default:
      return state;
  }
};
export default listFoodReducer;