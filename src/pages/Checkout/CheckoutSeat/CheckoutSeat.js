import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Checkout.css'
import { LeftCircleOutlined } from '@ant-design/icons';
import { layDanhSachPhongve } from '../../../redux/actions/QuanLyDatVeAction';
import { DAT_VE_ACTION } from '../../../redux/types/QuanLyDatVeType';
import { CheckOutlined, UserOutlined, HomeOutlined, CloseCircleOutlined } from '@ant-design/icons'
import './CheckoutSeat.css'
import { history } from '../../../App';
export default function CheckoutSeat(props) {

  const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)

  const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhongve(props.match.params.id))
  }, [])
  const { danhSachGhe, thongTinPhim } = chiTietPhongVe

  const { tenPhim, moTa, trailer, hinhAnh, ngayKhoiChieu } = infoFilm
  console.log(infoFilm);
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = dsGheDangDat.some(gheDD => gheDD === ghe) ? 'gheDangDat' : '';
      let classGheDaDuocDat
      if (ghe.daDat) {
        classGheDaDuocDat = ghe.taiKhoanNguoiDat !== userLogin.taiKhoan ? 'gheDaDuocDat' : ''
      }
      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
          onClick={() => {
            dispatch({
              type: DAT_VE_ACTION,
              ghe: ghe
            })
          }}>
          {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ display: 'block', marginTop: '-2px' }} /> : <CheckOutlined style={{ display: 'block', marginTop: '-2px' }} /> :
            <span style={{ display: 'block', marginTop: '-4px' }}>{ghe.stt}</span>}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }
  console.log(dsGheDangDat);
  return (
    <div className='checkoutSeat checkout pt-28 container '>
      <div className='checkoutSeat-top flex'>
        <div className='p-5  w-1/2'>
          <div className='bgCheckout h-full w-full flex '>
            <div className='w-1/6 text-center pt-3'>
              <LeftCircleOutlined className='text-2xl text-white leftCircleIcon'
                onClick={() => {
                  history.goBack()
                }} />
            </div>
            <div className='w-5/6 '>
              <h3 className='pt-3 textGray text-xl '>Ticket booking</h3>
              <h2 className='textWhite font-bold mt-10'>Selecting seats</h2>
              <div className='flex justify-between w-96 relative progressCheckout'>
                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                <p className=' w-4 h-4 mb-0 rounded-full'></p>
                <p className=' w-4 h-4 mb-0 rounded-full'></p>
                <p className=' w-4 h-4 mb-0 rounded-full'></p>
                <i className='absolute bg-orange-700 w-full top-1/2 z-0'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='p-5  w-1/2'>
          <div className='bgCheckout h-full w-full'>
            <div className='flex items-center'>
              <div className='w-1/3 p-3' style={{ height: '150px' }}>
                <img src={hinhAnh} alt="" className='w-full h-full rounded-lg' />
              </div>
              <div className='w-2/3 pl-4'>
                <h2 className='textWhite font-bold text-2xl '>{tenPhim}</h2>
                <p className='textGray'>
                  {ngayKhoiChieu}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='checkoutSeat-bottom flex'>
        <div className='p-5  w-2/3'>
          <div className='bgCheckout'>
            <h2 className='w-4/5 bg-slate-300 m-auto text-center rounded-lg my-5 py-2 font-bold'>SCREEN</h2>
            <div className='text-center'>
              {renderSeats()}
            </div>
            <div className='mt-5 nameSeats'>
              <table className="w-full ssm:w-2/3 m-auto text-sm  ">
                <thead>
                  <tr>
                    <th><button className='ghe'><span style={{ display: 'block', marginTop: '-4px' }}>00</span></button></th>
                    <th><button className='ghe gheVip'><span style={{ display: 'block', marginTop: '-4px' }}>00</span></button></th>
                    <th><button className='ghe gheDangDat'><span style={{ display: 'block', marginTop: '-4px' }}>00</span></button></th>
                    <th><button className='ghe gheDaDat'><CheckOutlined style={{ display: 'block', marginTop: '-2px', fontSize: '20px' }} /></button></th>
                    <th><button className='ghe gheDaDuocDat'><UserOutlined style={{ display: 'block', marginTop: '-2px', fontSize: '20px' }} /></button></th>
                  </tr>
                </thead>
                <tbody className=" ssm:text-base  uppercase ">
                  <tr>
                    <th className='textWhite text-xs'>Ghế chưa đặt</th>
                    <th className='textWhite text-xs'>Ghế Vip</th>
                    <th className='textWhite text-xs'>Ghế bạn đang đặt</th>
                    <th className='textWhite text-xs'>Ghế bạn đã đặt</th>
                    <th className='textWhite text-xs'>Ghế người khác đã đặt</th>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
        <div className='p-5  w-1/3'>
          <div className=' bgCheckout p-0'>
            <h2 className='textWhite text-lg'>Selecting</h2>
            <hr />
            <div className='my-5'>
              {dsGheDangDat.map((ghe) => {
                return <div className='flex p-2 m-2 rounded-lg' style={{ background: '#4a4a4a' }}>
                  <button className='ghe gheDangDat w-1/5'><span style={{ display: 'block', marginTop: '-4px' }}>{ghe.tenGhe}</span></button>
                  <div className='w-3/5 ml-2'>
                    <h3 className='textGray'>{tenPhim}</h3>
                    <h4 className='textWhite font-bold'>{ghe.giaVe} VND</h4>
                  </div>
                  <CloseCircleOutlined className='w-1/5 text-lg textWhite cursor-pointer' />
                </div>
              })}

            </div>
            <hr />
            <div>
              <p className='textWhite mt-2'>Selecting: <span style={{ color: '#fec802' }}>{dsGheDangDat.length}</span> items</p>
              <p className=' text-yellow-50 text-lg text-right pr-2'>Total: <span style={{ color: '#fec802' }}>
                {
                  dsGheDangDat.reduce((tongTien, ghe, index) => {
                    return tongTien += ghe.giaVe
                  }, 0)
                }
              </span>  VNĐ</p>
              <button className='w-4/5 p-3 block m-auto rounded-lg font-bold textWhite' style={{ background: '#c8235d' }} onClick={() => { history.push(`/checkoutinfo/${props.match.params.id}`) }}>Checkout</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
