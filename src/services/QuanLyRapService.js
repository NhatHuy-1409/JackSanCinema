import { http } from "../util/settingAxios";
import { GROUP_ID } from "../util/setting";

export class QuanLyRapService {

    layThongTinLichChieuPhim = (maPhim) => {
        return http.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }

}

export const quanLyRapService = new QuanLyRapService();