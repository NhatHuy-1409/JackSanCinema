import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Film from '../../components/Film/Film'
import { GetFilmList } from '../../redux/actions/QuanLyPhimActions'
import HomeMenu from './HomeMenu/HomeMenu'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import './Home.css'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
export default function Home(props) {

  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
  const arrFilmNow = arrFilm.filter(film => film.dangChieu === true)
  const arrFilmComing = arrFilm.filter(film => film.sapChieu === true)
  const arrFilmTop = arrFilm.filter((film, index) => index < 3)
  const arrFilmRank = arrFilm.filter((film, index) => index < 5)
  let dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
    callAPI()
  }, [])
  const callAPI = () => {
    const action = GetFilmList()
    dispatch(action)
  }

  return (
    <>
      <HomeCarousel />
      <div className='container home'>
        <div className='topMovie flex'>

          <div className="hidden sm:block sm:w-4/6">
            <h2 className='text-white font-bold pl-5 text-2xl'>TOP MOVIES THIS WEEK</h2>
            <div className=' grid grid-rows-2 grid-flow-col gap-4 h-4/6 sm:h-3/6 md:h-2/6'>
              <div className="row-span-2 col-span-1 h-full  relative rounded-lg ">
                <img src={arrFilmTop[0]?.hinhAnh} alt="" className='	' />
                <div className='absolute bottom-0 w-full contentTopMovie  p-3'>
                  <h2 className='text-white font-bold pl-5 text-3xl number1TopMovie'>01</h2>
                  <h3 className='text-white font-bold  text-base md:text-xl '>{arrFilmTop[0]?.tenPhim}</h3>
                </div>
              </div>
              <div className="col-span-2 relative">
                <img src={arrFilmTop[1]?.hinhAnh} alt="" />
                <div className='absolute bottom-0 w-full  contentTopMovie  p-3 flex'>
                  <h2 className='text-white font-bold pl-2 text-3xl numberTopMovie'>02</h2>
                  <h3 className='text-white font-bold pl-2 text-base md:text-xl '>{arrFilmTop[1]?.tenPhim}</h3>
                </div>
              </div>
              <div className="row-span-1 col-span-2 relative">
                <img src={arrFilmTop[2]?.hinhAnh} alt="" />
                <div className='absolute bottom-0 w-full  contentTopMovie  p-3 flex'>
                  <h2 className='text-white font-bold pl-2 text-3xl numberTopMovie'>03</h2>
                  <h3 className='text-white font-bold pl-2 text-base md:text-xl '>{arrFilmTop[2]?.tenPhim}</h3>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full sm:w-2/6'>
            <h2 className='text-white font-bold pl-5 text-2xl'>CHART</h2>
            <div className='h-4/6 sm:h-3/6 md:h-2/6'>
              {arrFilmRank.map((film, index) => {
                return (
                  <div className='h-1/5 px-3 pb-3' key={index}>
                    <div className='flex h-full items-center itemTopMovie'>
                      <h2 className='text-white font-bold pl-5 text-2xl numberTopMovie w-1/5'>{index + 1}</h2>
                      <div className='w-4/6'>
                        <h3 className='text-white font-bold pl-2 text-sm mb-0 md:m-auto md:text-base '>{film?.tenPhim}</h3>
                        <p className='text-gray-400  pl-2 text-sm mb-0 md:m-auto' >123456 views</p>
                      </div>
                      <div className='w-2/6 h-full'>
                        <img src={film?.hinhAnh} alt="" className='' />
                      </div>
                    </div>
                  </div>
                )

              })}

            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-0 py-24 sm:py-56 md:py-24 mx-auto sm:pb-24">
            {/* <div className="flex flex-wrap -m-4">
            {renderFilmList()}
          </div> */}
            {/* phim đang chiếu */}
            <h2 className='text-white font-bold pl-5 text-2xl'>NOW SHOWING</h2>
            <MultipleRowSlick arrFilm={arrFilmNow} className='showingFilm' />
            {/* phim sắp chiếu */}
            <h2 className='text-white font-bold pl-5 text-2xl mt-10'>COMING SOON</h2>
            <MultipleRowSlick arrFilm={arrFilmComing} className='commingFilm' />
          </div>
        </section>
        {/* <div className='mx-36'>
        <HomeMenu />
      </div> */}

      </div>
    </>

  )
}
