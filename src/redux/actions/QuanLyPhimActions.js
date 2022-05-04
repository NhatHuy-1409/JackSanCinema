
import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { GET_FILM_LIST, GET_INFO_FILM } from "../types/MovieTypes"


export const GetFilmList = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimService.layDanhSachPhim()
            let action = {
                type: GET_FILM_LIST,
                filmList: result.data.content
            }
            dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const GetInfoFilm = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimService.LayThongTinPhim(maPhim)
            let action = {
                type: GET_INFO_FILM,
                infoFilm: result.data.content
            }
            dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
