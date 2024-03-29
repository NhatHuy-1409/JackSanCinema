import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined, UserAddOutlined, DownOutlined } from '@ant-design/icons';
import { history } from '../../../../App';
import { Button, Dropdown, Menu, Space } from 'antd';
import { TOKEN, USER_LOGIN } from '../../../../util/setting';
import { Option } from 'antd/lib/mentions';
import style from './header.module.css'
import { Select } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useDispatch, useSelector } from 'react-redux';
import { GetInfoSystemRap } from '../../../../redux/actions/QuanLyRapAction';


const menuLog = (
    <Menu>
        <Menu.Item key={'1'}>
            <a target="_blank" rel="noopener noreferrer" key={'1'} onClick={() => { history.push('/home') }}><UserOutlined /> View Profile</a>
        </Menu.Item>
        <Menu.Item key={'2'}>
            <a target="_blank" rel="noopener noreferrer" key={'2'} onClick={() => { history.push('/admin') }}><UserAddOutlined /> Dashboard</a>
        </Menu.Item>
        <Menu.Item key={'3'}>
            <a target="_blank" rel="noopener noreferrer" key={'3'} onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(TOKEN)
                history.push('/home')
            }}><LogoutOutlined /> Log Out</a>
        </Menu.Item>
    </Menu>
);
export const DropdownMenuLog = () => (
    <Space wrap>
        <Dropdown overlay={menuLog}>
            <Button className='mx-1'>
                <Space>
                    {JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}
                    <DownOutlined />
                </Space>
            </Button>

        </Dropdown>

    </Space>
);


export default function Header(props) {
    const { infoHTRapChieu } = useSelector(state => state.QuanLyRapReducer)

    useEffect(() => {
        callAPI()
    }, [])
    const dispatch = useDispatch()
    const callAPI = () => {
        const action = GetInfoSystemRap()
        dispatch(action)
    }
    const [subMenu, setSubmenu] = useState(false)
    // const handleChange = (value) => {
    //     i18n.changeLanguage(value)
    //   }


    const renderListCinemas = () => {
        return infoHTRapChieu.map((rap) => {
            return <Fragment key={rap.maHeThongRap}>
                <Menu.Item key={rap.maHeThongRap}>
                    <div className="flex items-center">
                        <img src={rap.logo} className='w-10 pr-2' alt="" />
                        <a target="_blank" rel="noopener noreferrer" className='text-black hover:text-red-500' onClick={() => { history.push(`/cinema/${rap.maHeThongRap}`) }}> {rap.tenHeThongRap}</a>
                    </div>

                </Menu.Item>
            </Fragment>
        })
    }
    const menuCinema = (
        <Menu>
            {renderListCinemas()}
        </Menu>
    );
    const DropdownMenuCinemas = () => (
        <Space wrap className='spaceBtnMenuCinema'>
            <Dropdown overlay={menuCinema}>
                <Button className="btnMenuCinema menuItem flex items-center px-4 -mb-1 border-b-2  text-white " style={{ background: 'none', border: 'none', outline: 'none' }}>
                    <Space>
                        <p className="text-white " >CINEMAS</p>
                        <DownOutlined className='text-white' />
                    </Space>
                </Button>

            </Dropdown>

        </Space>
    );

    return (
        <header className="px-4 pt-4 pb-0 md:pb-4  dark:bg-coolGray-800 dark:text-coolGray-100  text-white fixed w-full " style={{
            background: `${props.bgHeader}`
        }} >
            <div className="p-0 lg:px-16 container flex justify-between h-16 mx-auto headerIcon items-center">
                <button className="p-4 lg:hidden" onClick={() => setSubmenu(!subMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2" onClick={() => { history.push('/home') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 logo">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
                    </svg>
                    <span className='nameCinema'>JACK'S CINEMA</span>
                </a>
                <ul className={`items-stretch hidden  space-x-3 lg:flex`} >
                    <li className="flex">
                        <NavLink to="/home" className="menuItem flex items-center px-4 -mb-1 border-b-2  text-white " activeClassName='border-b-pink-500'>MOVIES</NavLink>
                    </li>
                    <li className="flex">

                        <DropdownMenuCinemas />
                    </li>
                    <li className="flex">
                        <NavLink to="/checkouthistory" className="menuItem flex items-center px-4 -mb-1 border-b-2 text-white" activeClassName=' border-b-pink-500'>HISTORY</NavLink>
                    </li>

                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {localStorage.getItem(TOKEN) ?
                        <Fragment>
                            <UserOutlined className={`${style.anticon} items-center`} />
                            {/* <p className='mt-1 mb-0 pl-1 text-lg'>{JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}</p> */}
                            <DropdownMenuLog />

                        </Fragment>
                        :
                        <Fragment>
                            <button className="self-center px-8 py-3 rounded" onClick={() => {
                                history.push('/register')
                            }}>Don't have account yet?<br />Please Sign Up here</button>
                            <button className="btnSignIn self-center px-8 py-3 " onClick={() => {
                                history.push('/login')
                            }}>SIGN IN</button>
                        </Fragment>
                    }

                </div>
                <div className="p-0 lg:hidden flex">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg> */}
                    {localStorage.getItem(TOKEN) ?
                        <Fragment>
                            <UserOutlined className={`${style.anticon} items-center`} />
                            {/* <p className='mt-1 mb-0 pl-1 text-lg'>{JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}</p> */}
                            <DropdownMenuLog />

                        </Fragment>
                        :
                        <Fragment>
                            <UserAddOutlined className={`${style.anticon}  items-center`} onClick={() => { history.push('/login') }} />
                        </Fragment>
                    }



                    {/* <ShoppingCartOutlined className='text-2xl headerIcon' /> */}

                </div>
            </div>
            <div className={`${subMenu ? '' : 'hidden'} lg:hidden w-full absolute left-0 `} style={{
                background: `${props.bgHeader}`
            }}>
                <ul className={``} >
                    <li className="">
                        <NavLink to="/home" className="menuItem  px-4 -mb-1 border-b-2 w-4/5 block m-auto text-center mt-4 text-white " activeClassName='border-b-pink-500'>MOVIES</NavLink>
                    </li>
                    <li className="">
                        <DropdownMenuCinemas />
                    </li>
                    <li className="">
                        <NavLink to="/checkouthistory" className="menuItem  px-4 -mb-1 border-b-2 w-4/5 block m-auto text-center mt-4 text-white" activeClassName=' border-b-pink-500'>HISTORY</NavLink>
                    </li>

                </ul>
                <div className={`items-center flex-shrink-0 text-center`} >
                    {localStorage.getItem(TOKEN) ?
                        <Fragment>

                        </Fragment>
                        :
                        <Fragment>
                            <button className="self-center px-8 py-3 rounded" onClick={() => {
                                history.push('/register')
                            }}>Don't have account yet?<br />Please Sign Up here</button>
                            <button className="btnSignIn self-center px-8 py-3 " style={{ verticalAlign: 'text-top' }} onClick={() => {
                                history.push('/login')
                            }}>SIGN IN</button>
                        </Fragment>
                    }

                </div>
            </div>

        </header>

    )
}
