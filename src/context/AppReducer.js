export default ( state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_FAVOURITES":
            return{
                ...state,
                favourites: [action.payload, ...state.favourites]
            };
            case"REMOVE_MOVIE":
                return {
                    ...state,
                    favourites: state.favourites.filter(movie => movie.id !== action.payload)
                }
        default:
            return state;
    }
};