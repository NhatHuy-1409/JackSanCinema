import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel"

export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Header />
            {/* <HomeCarousel /> */}
            <props.component {...propsRoute} />
            <Footer/>
        </Fragment>
    }} />
}