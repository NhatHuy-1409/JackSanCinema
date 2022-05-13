
import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { quanLyRapService } from "../../services/QuanLyRapService"
import { GET_FILM_LIST, GET_INFO_DETAIL_RAP, GET_INFO_FILM, GET_INFO_RAP, GET_INFO_SYSTEM_RAP } from "../types/MovieTypes"



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
export const GetInfoSystemRap = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyRapService.layThongTinHeThongRap()
            let action = {
                type: GET_INFO_SYSTEM_RAP,
                infoSystemRap: result.data.content
            }
            dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const GetInfoDetailRap = (maHTRap) => {
    return async (dispatch) => {
        try {
            let result = await quanLyRapService.layThongTinCumRapTheoHeThong(maHTRap)
            let action = {
                type: GET_INFO_DETAIL_RAP,
                infoCTRap: result.data.content
            }
            dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const GetInfoTimeRap = (maHTRap) => {
    return async (dispatch) => {
        try {
            let result = await quanLyRapService.LayThongTinLichChieuHeThongRap(maHTRap)
            // let action = {
            //     type: GET_INFO_DETAIL_RAP,
            //     infoTimeRap: result.data.content
            // }
            console.log(result.data.content);
            // dispatch(action)
        }
        catch (error) {
            console.log(error);
        }
    }
}
