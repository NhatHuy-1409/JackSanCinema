import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Detail.css'
import { GetFilmList, GetInfoFilm } from '../../redux/actions/QuanLyPhimActions'

import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import ReactPlayer from 'react-player';
import { history } from '../../App'
export default function Detail(props) {
    const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)
    window.scrollTo(0, 0);  

    let dispatch = useDispatch()
    useEffect(() => {
        callAPI();
    }, [])
    useEffect(() => {
        // Chỉ khi thay đổi phim trong detail page
        dispatch(GetInfoFilm(props.match.params.id))
    }, [props.match.params.id])

    const callAPI = () => {
        dispatch(GetFilmList())
        dispatch(GetInfoFilm(props.match.params.id))
    }
    console.log(infoFilm);
    const { tenPhim, moTa, trailer, hinhAnh,maPhim } = infoFilm

    const renderActor = () => {
        return (
            <div className='text-center w-1/5 px-5 '>
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full  rounded-lg' alt="" />
                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                <p className='text-xs'>Main actor</p>
            </div>
        )
    }
    return (
        <div className='detail'>
            <div className="detailImg">
                <img src={hinhAnh} alt="" className='h-full w-full object-cover	' />
            </div>
            <div className="detailContent container">
                <div className='detailTop'>
                    <div className='flex items-center'>
                        <div className='w-1/3 p-3' style={{ height: '150px' }}>
                            <img src={hinhAnh} alt="" className='w-full h-full rounded-lg' />
                        </div>
                        <div className='w-2/3 pl-4'>
                            <h2 className='text-white font-bold text-2xl '>{tenPhim}</h2>
                            <p>
                                {moTa}
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/3 pr-5'>
                            <ul>
                                <li>Directed by: Chau Tinh Tri.</li>
                                <li>Duration: 2 hour 22 minutes.</li>
                                <li>Language: English|Vietsub available.</li>
                                <li>Production company: MTP Entertaiment.</li>
                                <li className='flex'>
                                    <div className="">
                                        <p className='text-xl text-white mb-2'>Staring</p>
                                        <div className='flex'>
                                            <div className='text-center w-1/5 px-5 '>
                                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full  rounded-lg' alt="" />
                                                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                                                <p className='text-xs'>Main actor</p>
                                            </div>
                                            <div className='text-center w-1/5 px-5'>
                                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                                                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                                                <p className='text-xs'>Main actor</p>
                                            </div>
                                            <div className='text-center w-1/5 px-5'>
                                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                                                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                                                <p className='text-xs'>Main actor</p>
                                            </div>
                                            <div className='text-center w-1/5 px-5'>
                                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                                                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                                                <p className='text-xs'>Main actor</p>
                                            </div>
                                            <div className='text-center w-1/5 px-5'>
                                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                                                <p className='mb-0 text-white text-base'>Jack Sparrow</p>
                                                <p className='text-xs'>Main actor</p>
                                            </div>
                                        </div>

                                    </div>

                                </li>
                            </ul>
                        </div>
                        <div className='w-1/3 pl-5 flex flex-col items-end'>
                            <ReactPlayer url={`${trailer}`} width="100%" height={'60%'}  playing={true} />

                            <p className='mt-12 mb-1'>Interested in this movie ?</p>
                            <button className=' py-4 px-8 rounded-lg text-white font-bold text-lg' style={{ backgroundColor: '#c8235d' }} onClick={() => { history.push(`/select/${maPhim}`) }}>Book now</button>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-2xl '>PHOTO GALLERY</h2>
                        <div className='flex'>
                            <div className='text-center w-1/5 px-5 '>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full  rounded-lg' alt="" />
                            </div>
                            <div className='text-center w-1/5 px-5'>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                            </div>
                            <div className='text-center w-1/5 px-5'>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                            </div>
                            <div className='text-center w-1/5 px-5'>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                            </div>
                            <div className='text-center w-1/5 px-5'>
                                <img src="https://movienew.cybersoft.edu.vn/hinhanh/red-snake-dangerous_gp01.jpg" className=' w-full rounded-lg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailBottom">
                    <h2 className='text-white font-bold text-2xl '>OTHERS MOVIE</h2>
                    <MultipleRowSlick arrFilm={arrFilm} />

                </div>
            </div>
        </div>
    )
}
