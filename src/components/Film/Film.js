import React from 'react'
import { history } from '../../App'
import './Film.css'
export default function Film(props) {
    const { tenPhim, hinhAnh, maPhim } = props.infoFilm
    return (

        <div className="film mr-2 h-full px-3 py-5 bg-opacity-75 rounded-lg overflow-hidden text-center relative">

            <div className='overflow-hidden ' style={{borderRadius:'10px 10px 0 0'}}>
                <img src={hinhAnh} alt="" />
            </div>
            <div className='p-2 contentFilm '>
                <h1 className="title-font sm:text-base text-white text-lg font-medium  h-2/5">{tenPhim}</h1>
                <p className="leading-relaxed mb-5 text-white text-xs">action | 1h33m | English</p>

                <div className="text-center mb-4 leading-none flex justify-center absolute bottom-0 left-0 w-full py-5">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>6
                    </span>
                </div>
                <a className="text-indigo-500 inline-flex items-center btnFilm" onClick={() => {
                    history.push(`/detail/${maPhim}`)
                    // window.location.reload()
                }}>Book
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

        </div>

    )
}
