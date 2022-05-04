import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetInfoFilm } from '../../redux/actions/QuanLyPhimActions'
import './Select.css'
export default function Select(props) {

    const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)

    let dispatch = useDispatch()
    useEffect(() => {
        callAPI();
        window.scrollTo(0, 0);
    }, [])


    const callAPI = () => {
        // dispatch(GetFilmList())
        dispatch(GetInfoFilm(props.match.params.id))
    }
    console.log(infoFilm);
    const { tenPhim, moTa, trailer, hinhAnh } = infoFilm

    return (
        <div className='select'>
            <div className="selectImg">
                <img src={hinhAnh} alt="" className='h-full w-full object-cover	' />
            </div>
            <div className="selectContent container">
                <div className="selectTop">
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
                </div>
                <div>
                    
                </div>
                <div className="selectBottom">

                </div>
            </div>
        </div>
    )
}
