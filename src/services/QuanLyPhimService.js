import { http } from "../util/settingAxios";
import { GROUP_ID } from "../util/setting";

export class QuanLyPhimService {

    layDanhSachBanner = () => {
        return http.get('api/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim = () => {
        return http.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
    LayThongTinPhim = (maPhim) => {
        return http.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService();