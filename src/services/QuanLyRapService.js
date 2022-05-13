import { http } from "../util/settingAxios";
import { GROUP_ID } from "../util/setting";

export class QuanLyRapService {

    layThongTinLichChieuPhim = (maPhim) => {
        return http.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    layThongTinHeThongRap = () => {
        return http.get(`api/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRapTheoHeThong = (maHTRap) => {
        return http.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHTRap}`)
    }
    LayThongTinLichChieuHeThongRap = (maHTRap) => {
        return http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHTRap}&maNhom=${GROUP_ID}`)
    }

}   

export const quanLyRapService = new QuanLyRapService();