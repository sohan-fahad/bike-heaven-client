import React from 'react';
import useAuth from '../../../Hooks/useAuth'
import ManageOrders from '../Admin/ManageOrders/ManageOrders'
import MyOrders from '../MyOrders/MyOrders'

const DashboardHome = () => {
    const {admin} =useAuth()
    return (
        <div>
            {
                admin? <ManageOrders></ManageOrders> : <MyOrders></MyOrders>
            }
        </div>
    );
};

export default DashboardHome;