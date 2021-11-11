import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Dashboard.css'
import useAuth from '../../../Hooks/useAuth'
import { Route, useRouteMatch } from 'react-router';
import { Switch } from 'react-router';
import AddReview from '../AddReviews/AddReviews'
import AddProduct from '../Admin/AddProduct/AddProduct';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';


const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);

    const { path, url } = useRouteMatch()
    const { LogOut, admin } = useAuth()
    const UserMenu = [

        {
            title: 'My Orders',
            path: `${url}/myorders`,
            icon: <FaIcons.FaCartPlus />,
            cName: 'nav-text'
        },
        {
            title: 'Payment',
            path: `${url}/userpayment`,
            icon: <MdIcons.MdPayment />,
            cName: 'nav-text'
        },
        {
            title: 'Add Review',
            path: `${url}/addreview`,
            icon: <MdIcons.MdOutlineReviews />,
            cName: 'nav-text'
        }
    ];

    const AdminMenu = [
        {
            title: 'Manage Orders',
            path: `${url}/allorders`,
            icon: <MdIcons.MdManageAccounts />,
            cName: 'nav-text'
        },
        {
            title: 'Add Product',
            path: `${url}/addproduct`,
            icon: <BiIcons.BiBookAdd />,
            cName: 'nav-text'
        },
        {
            title: 'Make Admin',
            path: `${url}/makeadmin`,
            icon: <MdIcons.MdAdminPanelSettings />,
            cName: 'nav-text'
        },
        {
            title: 'Manage Products',
            path: `${url}/manageproduct`,
            icon: <MdIcons.MdProductionQuantityLimits />,
            cName: 'nav-text'
        }
    ]

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        console.log(admin)
    }, [])
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="sideNav">
                    <Link to="#" className="manu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu-bars active' : 'nav-menu-bars'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {admin ? AdminMenu.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        }) :
                            UserMenu.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        <li className='nav-text'>
                            <Link to={`${url}`} onClick={LogOut}>
                                {<BiIcons.BiLogOutCircle />}
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
            <Switch>
                <Route exact path={`${path}/`}>
                <DashboardHome></DashboardHome>
                </Route>
                <Route exact path={`${path}/myorders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/addreview`}>
                    <AddReview></AddReview>
                </Route>
                <Route path={`${path}/userpayment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/allorders`}>
                    <ManageOrders></ManageOrders>
                </Route>
                <Route path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/manageproduct`}>
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;