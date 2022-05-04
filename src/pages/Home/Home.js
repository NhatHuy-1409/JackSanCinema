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
  console.log(arrFilm);
  console.log(arrFilmTop);
  let dispatch = useDispatch()
  useEffect(() => {
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

          <div className="w-4/6">
            <h2 className='text-white font-bold pl-5 text-2xl'>TOP MOVIES THIS WEEK</h2>
            <div className=' grid grid-rows-2 grid-flow-col gap-4 h-2/6'>
              <div className="row-span-2 col-span-1 h-full  relative rounded-lg ">
                <img src={arrFilmTop[0]?.hinhAnh} alt="" className='	' />
                <div className='absolute bottom-0 w-full contentTopMovie  p-3'>
                  <h2 className='text-white font-bold pl-5 text-2xl number1TopMovie'>01</h2>
                  <h2 className='text-white font-bold  text-xl '>{arrFilmTop[0]?.tenPhim}</h2>
                </div>
              </div>
              <div className="col-span-2 relative">
                <img src={arrFilmTop[1]?.hinhAnh} alt="" />
                <div className='absolute bottom-0 w-full  contentTopMovie  p-3 flex'>
                  <h2 className='text-white font-bold pl-5 text-2xl numberTopMovie'>02</h2>
                  <h2 className='text-white font-bold pl-5 text-xl '>{arrFilmTop[0]?.tenPhim}</h2>
                </div>
              </div>
              <div className="row-span-1 col-span-2 relative">
                <img src={arrFilmTop[2]?.hinhAnh} alt="" />
                <div className='absolute bottom-0 w-full  contentTopMovie  p-3 flex'>
                  <h2 className='text-white font-bold pl-5 text-2xl numberTopMovie'>03</h2>
                  <h2 className='text-white font-bold pl-5 text-xl '>{arrFilmTop[0]?.tenPhim}</h2>
                </div>
              </div>
            </div>

          </div>
          <div className='w-2/6'>
            <h2 className='text-white font-bold pl-5 text-2xl'>CHART</h2>
            <div className='h-2/6'>
              {arrFilmRank.map((film, index) => {
                return (
                  <div className='h-1/5 px-3 pb-3'>
                    <div className='flex h-full items-center itemTopMovie'>
                      <h2 className='text-white font-bold pl-5 text-2xl numberTopMovie w-1/5'>0{index + 1}</h2>
                      <div className='w-4/6'>
                        <h2 className='text-white font-bold pl-2 text-base '>{film?.tenPhim}</h2>
                        <p className='text-gray-400  pl-2 text-sm ' >123456 views</p>
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
          <div className="container px-5 py-24 mx-auto">
            {/* <div className="flex flex-wrap -m-4">
            {renderFilmList()}
          </div> */}
            {/* phim đang chiếu */}
            <h2 className='text-white font-bold pl-5 text-2xl'>NOW SHOWING</h2>
            <MultipleRowSlick arrFilm={arrFilmNow} />
            {/* phim sắp chiếu */}
            <h2 className='text-white font-bold pl-5 text-2xl mt-10'>COMING SOON</h2>
            <MultipleRowSlick arrFilm={arrFilmComing} />
          </div>
        </section>
        {/* <div className='mx-36'>
        <HomeMenu />
      </div> */}

      </div>
    </>

  )
}
