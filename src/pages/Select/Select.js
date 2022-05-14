import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetInfoFilm } from '../../redux/actions/QuanLyPhimActions'
import { GetInfoRap } from '../../redux/actions/QuanLyRapAction'
import './Select.css'
import { Tabs } from 'antd';
import moment from 'moment'
import { history } from '../../App'
const { TabPane } = Tabs;
export default function Select(props) {

    const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { infoRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const [tabPosi,setTabPosi] = useState('left')
    let dispatch = useDispatch()

    // useEffect(() => {
    //     handleResize()
    // }, [window.outerWidth])

    useEffect(() => {
        // console.log(window.outerWidth);
        // handleResize()
        window.scrollTo(0, 0);
        callAPI();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const callAPI = () => {
        // dispatch(GetFilmList())
        dispatch(GetInfoFilm(props.match.params.id))
        dispatch(GetInfoRap(props.match.params.id))
    }
    const { tenPhim, moTa, trailer, hinhAnh } = infoFilm
    const { heThongRapChieu } = infoRapChieu
    const handleResize = () => { 
        if(window.outerWidth < 450){
            // setTabPosi('top')
            return 'top'
        }else{
            // setTabPosi('left')
            return 'left'
        }
     }
    const renderHTRap = () => {
        return <div className='bg-transparent m-5'>
            <Tabs tabPosition={handleResize()}>
                {heThongRapChieu?.map((htRap, index) => {
                    return <TabPane
                        key={index} tab={<div className='text-white text-left'>
                            <img src={htRap.logo} width={50} className='rounded-full ' alt="" />
                            <p>{htRap.tenHeThongRap}</p>

                        </div>}>
                        {htRap.cumRapChieu.map((rap, index) => {
                            return <div key={index}>
                                <div className='flex justify-between items-center mb-5'>
                                    <div>
                                        <h2 className='text-xl text-white font-bold'>{rap.tenCumRap}</h2>
                                        <h2 className='text-sm text-gray-400'>{rap.diaChi}</h2>
                                    </div>
                                    <div>
                                        <img src={rap.hinhAnh} width={150} className='rounded-lg' alt="" />
                                    </div>
                                </div>

                                <div className='grid grid-cols-4 gap-1'>
                                    {
                                        rap.lichChieuPhim.slice(0, 12).map((lichChieu) => {
                                            return <div className='col-span-1' key={lichChieu.maLichChieu}>
                                                <div className='itemTime text-white text-center font-bold cursor-pointer' onClick={() => {
                                                    history.push(`/checkoutseat/${lichChieu.maLichChieu}`)
                                                }}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </div>

                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })}
                    </TabPane>
                })}
            </Tabs>
        </div>
    }

    return (
        <div className='select'>
            <div className="selectImg">
                <img src={hinhAnh} alt="" className='h-full w-full object-cover	' />
            </div>
            <div className="selectContent container">
                <div className="selectTop">
                    <div className='flex items-center'>
                        <div className='w-0 sm:w-1/3 p-3 imgDetailContent' style={{ height: '150px' }}>
                            <img src={hinhAnh} alt="" className='w-full h-full rounded-lg ' />
                        </div>
                        <div className='w-full sm:w-2/3 pl-0 sm:pl-4'>
                            <h2 className='text-white font-bold text-2xl '>{tenPhim}</h2>
                            <p>
                                {moTa}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='selectBottom'>

                    <div className="selectTime">
                        <h2 className='text-white font-bold text-xl ' >Select Cinema</h2>
                        <div className='selectTimeContent'>
                            <div className="selectTitle p-4">
                                <h2 className='text-white font-bold text-xl p-4 ' >2D STANDARD</h2>

                            </div>
                            <div>
                                {renderHTRap()}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
