import { Fragment, useEffect, useState } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel"

export const HomeTemplate = (props) => {
    const [bgHeader, setBgHeader] = useState('#00000078')
    const onScroll = (e) => {
        if(window.scrollY > 350){
            setBgHeader('#000000')
        }else{
            setBgHeader('#00000078')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment >
            <Header bgHeader={bgHeader} />
            {/* <HomeCarousel /> */}
            <props.component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}