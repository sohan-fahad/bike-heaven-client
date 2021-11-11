import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';
import ApprovedOrders from '../ApprovedOrder.js/ApprovedOrders';
import PendingOrders from '../PendingOrders/PendingOrders';
import ShippedOrders from '../ShippedOrders/ShippedOrders';

const ManageOrders = () => {
    const { setErr, err } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(true)
    const [manageOrders, setManageOrder] = useState("PENDING")
    const [shipped, setShipped] = useState(true)

    let statusRef = useRef()
    useEffect(() => {
        fetch(`https://secret-ocean-30546.herokuapp.com/orders/${manageOrders}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [control])

    const handleCancelOrder = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert The Order!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Canceled!',
                    'Your Order has been Canceled.',
                    'success'
                )
                axios.delete(`https://secret-ocean-30546.herokuapp.com/orders/${id}`)
                    .then(res => {
                        const data = res.data
                        if (data.deletedCount > 0) {
                            setControl(!control)
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Order is safe :)',
                    'error'
                )
            }
        })
    }

    const handleStatus = (id, updateStatus) => {
        let data = orders.find(booking => booking._id === id)
        data.status = updateStatus
        console.log(data.status);
        fetch(`https://secret-ocean-30546.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(data => {
                if (data) {
                    setControl(!control)
                    Swal.fire(
                        'Good job!',
                        `Order has been ${updateStatus}!`,
                        'success'
                    )
                }
            })
            .catch(err => {
                setErr(err.code, err.message)
            })


    }

    const handleApprovedOrders = (orderStatus) => {
        setManageOrder(orderStatus)
        setControl(!control)
        console.log(manageOrders);
    }

    return (
        <div className="my-5">
            <Container>
                {
                    manageOrders === "PENDING" && <Button onClick={() => handleApprovedOrders("APPROVED")} className="global-btn py-2 px-3 mb-3">APPROVED ORDERS</Button>
                }
                {
                    manageOrders === "APPROVED" && <Button onClick={() => handleApprovedOrders("PENDING")} className="global-btn py-2 px-3 mb-3">PENDING ORDERS</Button>
                }
                {
                    shipped ? <Button onClick={() => {
                        handleApprovedOrders("SHIPPED")
                        setShipped(false)
                    }} className="btn btn-success py-2 px-3 mb-3 ms-2">SHIPPED ORDERS</Button> : <Button onClick={() => {
                        handleApprovedOrders("PENDING")
                        setShipped(true)
                    }} className="btn btn-success py-2 px-3 mb-3 ms-2">BACK</Button>
                }
            </Container>
            {manageOrders === "PENDING" && <PendingOrders
                orders={orders}
                handleStatus={handleStatus}
                handleCancelOrder={handleCancelOrder}
                statusRef={statusRef}
            >
            </PendingOrders>
            }
            {
                manageOrders === "APPROVED" && <ApprovedOrders
                    orders={orders}
                    handleStatus={handleStatus}
                    handleCancelOrder={handleCancelOrder}
                    statusRef={statusRef}
                >

                </ApprovedOrders>
            }
            {
                manageOrders === "SHIPPED" && <ShippedOrders
                    orders={orders}
                    handleStatus={handleStatus}
                    handleCancelOrder={handleCancelOrder}
                    statusRef={statusRef}
                ></ShippedOrders>
            }
        </div>
    );
};

export default ManageOrders;