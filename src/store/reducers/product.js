// reducer
const initialState = {
  todos: {
    id: 1,
    product: "Sampo",
  },
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
