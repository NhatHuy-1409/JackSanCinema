import _ from 'lodash'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinTaiKhoanAction } from '../../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction'

export default function CheckoutHistory() {

    const { thongTinTaiKhoan } = useSelector(state => state.QuanLyNguoiDungReducer)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(layThongTinTaiKhoanAction())
    }, [])
    const renderTicketItem = () => {
        return thongTinTaiKhoan.thongTinDatVe?.map((ve) => {
            const seats = _.first(ve.danhSachGhe)
            return <div key={ve.maVe} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-start border-gray-200 border p-4 rounded-lg" style={{ background: 'linear-gradient(320deg, rgba(254,200,2,1) 8%, rgba(255,138,0,1) 97%)' }}>
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ve.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-red-700 text-lg title-font font-medium">{ve.tenPhim}</h2>
                        <p className="text-black"><strong>Giờ chiếu:</strong> {moment(ve.ngayDat).format('hh:mm A')} - <strong>Ngày chiếu:</strong> {moment(ve.ngayDat).format('DD-MM-YYYY')}</p>
                        <p className="text-black"><strong>Địa điểm:</strong> {seats.tenHeThongRap} </p>
                        <p className="text-black"><strong>Tên rạp:</strong> {seats.tenCumRap} - <strong>Ghế:</strong> {_.sortBy(ve.danhSachGhe, ['tenGhe']).map(ghe => <span key={ghe.maGhe}>{ghe.tenGhe} </span>)}</p>
                    </div>
                </div>
            </div>
        })
    }
    return <section className="text-gray-600 body-font container" style={{ background: '#3d3d3d' }}>
        <div className="container px-5 py-28 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 " style={{ color: '#d2212e' }}>Lịch sử đặt vé của bạn</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Hãy xem thông tin và thời gian để xem phim vui vẻ bạn nhé !</p>
            </div>
            <div className="flex flex-wrap -m-2">
                {renderTicketItem()}
            </div>
        </div>
    </section>

}
