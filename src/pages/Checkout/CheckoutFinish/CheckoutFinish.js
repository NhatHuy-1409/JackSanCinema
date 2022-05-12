import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Checkout.css'
import { LeftCircleOutlined } from '@ant-design/icons';
import { layDanhSachPhongve } from '../../../redux/actions/QuanLyDatVeAction';
import { DAT_VE_ACTION } from '../../../redux/types/QuanLyDatVeType';
import { CheckOutlined, UserOutlined, HomeOutlined, CloseCircleOutlined, RightOutlined, SketchOutlined, QrcodeOutlined } from '@ant-design/icons'
import { history } from '../../../App';
import '../CheckoutPay/CheckoutPay.css'
export default function CheckoutFinish(props) {

    const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)

    const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachPhongve(props.match.params.id))
    }, [])
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe
    const { tenPhim, moTa, trailer, hinhAnh, ngayKhoiChieu } = infoFilm
    return (
        <div className='checkoutPay checkout pt-28 container '>
            <div className='checkoutPay-top block md:flex'>
                <div className='p-2 md:p-5 w-full md:w-1/2'>
                    <div className='bgCheckout h-full w-full flex '>
                        <div className='w-1/6 text-center pt-3'>
                            <LeftCircleOutlined className='text-2xl text-white leftCircleIcon'
                                onClick={() => {
                                    history.goBack()
                                }} />
                        </div>
                        <div className='w-5/6 '>
                            <h3 className='pt-3 textGray text-xl '>Ticket booking</h3>
                            <h2 className='textWhite font-bold mt-5 md:mt-10'>Fill information</h2>
                            <div className='flex justify-between  w-48 lg:w-96 relative progressCheckout progressFinish'>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <i className='absolute bg-orange-700 w-full top-1/2 z-0'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-2 md:p-5  w-full md:w-1/2'>
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
            <div className='checkoutPay-bottom block md:flex'>
                <div className='p-2 md:p-5  w-full md:w-2/3'>
                    <div className='bgCheckout'>
                        <div className="flex justify-between items-center">
                            <h2 className='textWhite text-lg'>Congratulations, you have complete your booking!</h2>
                            {/* <RightOutlined className='text-xl text-white rightIcon' /> */}
                        </div>
                        <hr />
                        <h2 className='textWhite text-lg mt-5'>E-tickets and invoice</h2>
                        <ul>
                            <li className='textGray'>
                                + Your e-tickets are sent to your provided email.
                            </li>
                            <li className='textGray'>
                                + You can also dowload your e-tickets with the button below.
                            </li>
                            <li className='textGray'>
                                + Please scan it to check-in and enjoy the movie!
                            </li>
                        </ul>
                        <button className='w-3/6 sm:w-2/6 p-2  ml-1 rounded-lg font-bold textWhite ' style={{ background: '#7f66de' }} onClick={() => { history.push(`/checkoutpay/${props.match.params.id}`) }}>Dowload e-tickets</button>
                        <hr className='my-3' />
                        <ul>
                            <li className='textGray'>Please contact us if you have not received the email or need any support</li>
                            <li className='textGray'>Email: <span>nhathuy@gmail.com</span></li>
                            <li className='textGray'>Phone: <span>0123456789</span></li>
                        </ul>


                        <div>
                            <button className='w-3/6 sm:w-2/6 p-2 mt-5 rounded-lg font-bold textWhite' style={{ background: 'transparent', border: '1px solid #777777' }} onClick={() => { history.push(`/checkoutpay/${props.match.params.id}`) }}>Back to homepage</button>
                            <button className='w-3/6 sm:w-2/6 p-2 mt-5 rounded-lg font-bold textWhite ml-2' style={{ background: 'transparent', border: '1px solid #777777' }} onClick={() => {
                                history.push(`/checkouthistory`)
                            }}>Booking history</button>

                        </div>

                    </div>
                </div>
                <div className='p-2 md:p-5  w-full md:w-1/3'>
                    <div className='text-center p-4' style={{ background: '#1a142c', borderRadius: ' 10px 10px 0 0' }}>
                        <h3 className='textWhite'>E-tickets</h3>
                        <img src={hinhAnh} alt="" className='m-auto w-full h-36 rounded-lg object-fill' />
                        <h4 className='textWhite'>{tenPhim}</h4>
                    </div>

                    <div className=' bgCheckout p-0 ' style={{ borderRadius: '0 0 10px 10px' }}>
                        <ul>
                            <li><span className='textGray'>Time:     </span><span className='textWhite pl-4'>{ngayKhoiChieu}</span></li>
                            <li><span className='textGray'>Cinema:     </span><span className='textWhite pl-4'></span></li>
                            <li><span className='textGray'>Room:     </span><span className='textWhite pl-4'></span></li>
                            <li><span className='textGray'>Seat:     </span><span className='textWhite pl-4'>
                                {dsGheDangDat.map((ghe) => {
                                    return <span key={ghe.maGhe} className='textWhite'>
                                        {ghe.tenGhe} -
                                    </span>
                                })}
                            </span></li>
                            <li><span className='textGray'>Ticket Paid:     </span><span className='textWhite pl-4'>{
                                dsGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe
                                }, 0)
                            }</span></li>
                        </ul>
                    </div>
                    <div className='bgCheckout text-center' style={{ borderTop: '1px dashed white', borderLeft: '10px solid transparent', borderRight: '10px solid transparent' }}>
                        <QrcodeOutlined className='text-8xl text-white rightIcon' />
                    </div>

                </div>
            </div>
        </div>
    )
}
