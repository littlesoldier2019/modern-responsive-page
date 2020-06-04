export const contentfulReducer = (state, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return [...action.news];
        case 'GET_PRODUCTS':
            return [...action.product];    
        default:
            return state;
    }
};