import { GET_FILM_LIST, GET_INFO_FILM } from "../../types/MovieTypes"

const stateDefault = {
    arrFilm: [],
    infoFilm:{}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_FILM_LIST:
            state.arrFilm=action.filmList
            return { ...state }
        case GET_INFO_FILM:
            state.infoFilm = action.infoFilm
            return { ...state }
        default:
            return state
    }
}
