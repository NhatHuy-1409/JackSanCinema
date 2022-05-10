import { GET_INFO_RAP } from "../../types/MovieTypes";

const stateDefault = {
    infoRapChieu: [],
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_INFO_RAP:
            state.infoRapChieu = action.infoRap
            return { ...state }
        default:
            return state
    }
}
