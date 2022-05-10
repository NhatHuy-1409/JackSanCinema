
import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { quanLyRapService } from "../../services/QuanLyRapService"
import { GET_FILM_LIST, GET_INFO_FILM, GET_INFO_RAP } from "../types/MovieTypes"



export const GetInfoRap = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyRapService.layThongTinLichChieuPhim(maPhim)
            let action = {
                type: GET_INFO_RAP,
                infoRap: result.data.content
            }
            dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
