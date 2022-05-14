import React, { useEffect, useState } from 'react'
import { Row, Col, Tabs } from 'antd';
import { GetInfoDetailRap, GetInfoTimeRap } from '../../redux/actions/QuanLyRapAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Cinema(props) {

    const { infoCTRap,infoHTRapChieu } = useSelector(state => state.QuanLyRapReducer)

    useEffect(() => {
        callAPI()
    }, [])
    useEffect(() => {
        // Chỉ khi thay đổi phim trong detail page
        window.scrollTo(0, 0);
        dispatch(GetInfoDetailRap(props.match.params.id))
    }, [props.match.params.id])
    const dispatch = useDispatch()
    const callAPI = () => {
        const action1 = GetInfoDetailRap(props.match.params.id)
        dispatch(action1)
        const action2 = GetInfoTimeRap(props.match.params.id)
        dispatch(action2)
    }
    let infoHTRap = infoHTRapChieu.filter((rap) =>  rap.maHeThongRap === props.match.params.id )
    const renderCinemaItem = () => {
        return infoCTRap.map((rap) => {
            return <div key={rap.maCumRap} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-start border-gray-200 border p-4 rounded-lg" style={{ background: 'linear-gradient(320deg, rgba(254,200,2,1) 8%, rgba(255,138,0,1) 97%)' }}>
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ve.hinhAnh} /> */}
                    <div className="flex-grow">
                        <h2 className="text-red-700 text-lg title-font font-medium">{rap.tenCumRap}</h2>
                        <p className="text-black"><strong>Địa điểm:</strong> {rap.diaChi} </p>
                    </div>
                </div>
            </div>
        })
    }

    const renderShowTime = () => { 

     }
    return <section className="text-gray-600 body-font container" style={{ background: '#3d3d3d' }}>
        <div className="container px-5 py-28 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 " style={{ color: '#d2212e' }}>Danh sách Rạp - {infoHTRap[0].tenHeThongRap}</h1>
                {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Hãy xem thông tin và thời gian để xem phim vui vẻ bạn nhé !</p> */}
            </div>
            <div className="flex flex-wrap -m-2">
                {renderCinemaItem()}
            </div>
            <div>
                {renderShowTime()}
            </div>
        </div>
    </section>
}
