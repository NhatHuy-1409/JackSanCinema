import { GET_INFO_DETAIL_RAP, GET_INFO_RAP, GET_INFO_SYSTEM_RAP } from "../../types/MovieTypes";

const stateDefault = {
    infoRapChieu: [],
    infoHTRapChieu: [],
    infoCTRap: [],
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_INFO_RAP:
            state.infoRapChieu = action.infoRap
            return { ...state }
        case GET_INFO_SYSTEM_RAP:
            state.infoHTRapChieu = action.infoSystemRap
            return { ...state }
        case GET_INFO_DETAIL_RAP:
            state.infoCTRap = action.infoCTRap
            return { ...state }
        default:
            return state
    }
}
