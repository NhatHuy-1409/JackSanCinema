import React, { useEffect } from 'react'
import { Row, Col, Carousel } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getBannerList } from '../../../../redux/actions/CarouselActions';
import styleSlick from './HomeCarousel.module.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './HomeCarousel.css'
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (

        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: 'block', right: '8%', zIndex: '2' }}
            onClick={onClick}
        >
            <RightOutlined style={{ color: 'white', fontSize: '20px', backgroundColor: '#7f66de', padding: '16px 8px', borderRadius: '10px', opacity: '0.7' }} />
        </div>

    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (

        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: 'block', left: '8%', zIndex: '2' }}
            onClick={onClick}
        >
            <LeftOutlined style={{ color: 'white', fontSize: '20px', backgroundColor: '#7f66de', padding: '16px 8px', borderRadius: '10px', opacity: '0.7' }} />
        </div>

    )
}

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

export default function HomeCarousel() {
    const { arrBanner } = useSelector(state => state.CarouselReducer)
    let dispatch = useDispatch();
    useEffect(() => {
        callAPI()
    }, [])
    const callAPI = () => {
        const action = getBannerList()
        dispatch(action)
    }
    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${banner.hinhAnh})` }}>
                    <img src={banner.hinhAnh} alt="" className='w-full opacity-0' />
                
                </div>
                <div className='carouselContent container'>
                        <h3 className='text-white text-xl'>0{index+1} </h3>
                        <p className='text-2xl'>Welcome to Jack's Cinema!</p>
                    </div>
            </div>
        })
    }
    return (
        <div className='homeCarousel'>
            <Carousel effect="fade" arrows  {...settings}>
                {renderBanner()}
            </Carousel>

        </div>

    )
}
