import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { CarouselReducer } from "./reducers/CarouselReducer/CarouselReducer";
import QuanLyDatVeReducer from "./reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer/QuanLyRapReducer";
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyDatVeReducer,
    QuanLyNguoiDungReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))