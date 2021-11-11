import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()

    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(true)

    useEffect(() => {
        fetch(`https://secret-ocean-30546.herokuapp.com/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
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
    return (
        <div className="my-5">
            <Container>
                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            orders.map((pd, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{user.displayName}</td>
                                <td>{pd.price}</td>
                                <td>{pd.productName}</td>
                                <td>{pd.status}</td>
                                <td className="text-center">{
                                    <button className="global-btn px-3 py-2" onClick={() => handleCancelOrder(pd._id)} >Cencel</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;