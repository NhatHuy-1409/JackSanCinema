import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { GET_BANNER_LIST } from '../types/MovieTypes';
export const getBannerList = () => {
    return (dispatch) => {
        let promise = quanLyPhimService.layDanhSachBanner()
        promise.then((result) => {
            let action = {
                type: GET_BANNER_LIST,
                bannerList: result.data.content
            }
            dispatch(action)
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}