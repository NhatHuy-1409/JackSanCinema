import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Checkout.css'
import { LeftCircleOutlined } from '@ant-design/icons';
import { layDanhSachPhongve } from '../../../redux/actions/QuanLyDatVeAction';
import { DAT_VE_ACTION } from '../../../redux/types/QuanLyDatVeType';
import { CheckOutlined, UserOutlined, HomeOutlined, CloseCircleOutlined, RightOutlined, SketchOutlined } from '@ant-design/icons'
import { history } from '../../../App';
import '../CheckoutPay/CheckoutPay.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GROUP_ID } from '../../../util/setting';
import { message } from 'antd';

export default function CheckoutInfo(props) {

    const { arrFilm, infoFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachPhongve(props.match.params.id))
    }, [])
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe
    const { tenPhim, moTa, trailer, hinhAnh, ngayKhoiChieu } = infoFilm


    const formik = useFormik({
        initialValues: {
            email: "",
            soDt: "",
            hoTen: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Please enter your email').email('Please enter a valid email address'),
            soDt: Yup.string().required('Please enter your phone number').matches(/^[0-9]+$/, 'Phonenumber should be number'),
            hoTen: Yup.string().required('Please enter your fullname').matches(/^[A-Z a-z]+$/, 'Fullname should be letter').trim(),
        }),
        onSubmit: values => {
            console.log(values);
        },

    })
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
                            <div className='flex justify-between  w-48 lg:w-96 relative progressCheckout progressInfo'>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full progressSeat'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full'></p>
                                <p className=' w-4 h-4 mb-0 rounded-full'></p>
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
                            <h2 className='textWhite text-lg'>Fill your information</h2>
                            <RightOutlined className='text-xl text-white rightIcon' />
                        </div>
                        <hr />
                        <form className='my-10' onSubmit={formik.handleSubmit}>
                            <input type="text" name='hoTen' placeholder='YourName' className='p-2 m-2 bg-transparent w-4/5 md:w-3/5' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.hoTen && formik.errors.hoTen ? (
                                <div className='text-red-700 mb-4'>{formik.errors.hoTen}</div>
                            ) : <div className='mb-4'></div>}
                            <input type="text" name='soDt' placeholder='Phone' className='p-2 m-2 bg-transparent w-4/5 md:w-2/5' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.soDt && formik.errors.soDt ? (
                                <div className='text-red-700 mb-4'>{formik.errors.soDt}</div>
                            ) : <div className='mb-4'></div>}
                            <input type="text" name='email' placeholder='Email' className='p-2 m-2 bg-transparent w-4/5 md:w-2/5' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-700 mb-4'>{formik.errors.email}</div>
                            ) : <div className='mb-4'></div>}

                            <button className='w-2/6 md:w-1/6 p-2 mt-5 rounded-lg font-bold textWhite' style={{ background: 'transparent', border: '1px solid #777777' }} onClick={() => { history.push(`/checkoutpay/${props.match.params.id}`) }}>Back</button>
                            <button type='submit' className='w-2/6 md:w-1/6 p-2  ml-1 rounded-lg font-bold textWhite' style={{ background: '#7f66de' }} onClick={() => {

                                console.log(formik.isValid);
                                if (formik.isValid) {
                                    history.push(`/checkoutpay/${props.match.params.id}`) 
                                }

                            }}>Next</button>

                        </form>


                    </div>
                </div>
                <div className='p-2 md:p-5  w-full md:w-1/3'>
                    <div className=' bgCheckout p-0'>
                        <h2 className='textWhite text-lg'>Booking Sumary</h2>
                        <hr />
                        <div className='my-5'>
                            <div className="flex">
                                <div className="w-4/5">
                                    {dsGheDangDat.map((ghe) => {
                                        return <span key={ghe.maGhe} className='textWhite'>
                                            Seat {ghe.tenGhe} -
                                        </span>
                                    })}
                                    <p className='textGray'>Cinema: Ten rap</p>
                                </div>
                                <div className="w-1/5">
                                    <div className="flex items-center bg-slate-400 rounded justify-between p-2">
                                        <SketchOutlined className='w-1/2 text-xl pr-1 textGray' />
                                        <p className='w-1/2 mb-0 pl-1 border-l-2 border-solid border-gray-500 text-black' >X{dsGheDangDat.length}</p>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="flex items-center">
                                <div className="w-4/5">
                                    <p className='textWhite mt-2'>Ticket:  </p>
                                </div>
                                <div className="w-1/5">
                                    <p className='textWhite'><span style={{ color: '#fec802' }}>{dsGheDangDat.length}</span> items</p>
                                </div>

                            </div>
                            <div className="flex items-center">
                                <div className="w-4/5">
                                    <p className='textWhite mt-2'>Fee:  </p>
                                </div>
                                <div className="w-1/5">
                                    <p className='textWhite'><span style={{ color: '#fec802' }}>0</span> VND</p>
                                </div>

                            </div>



                        </div>
                        <hr />
                        <div>
                            <p className=' text-yellow-50 text-lg text-right pr-2 my-2'>Total: <span style={{ color: '#fec802' }}>
                                {
                                    dsGheDangDat.reduce((tongTien, ghe, index) => {
                                        return tongTien += ghe.giaVe
                                    }, 0)
                                }
                            </span>  VNĐ</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
