import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    const [managePruduct, setManageProduct] = useState([])
    const [control, setControl] = useState(true)

    useEffect(() => {
        fetch("https://secret-ocean-30546.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setManageProduct(data))
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
                    'Delete!',
                    'Your Product has been Deleted.',
                    'success'
                )
                axios.delete(`https://secret-ocean-30546.herokuapp.com/products/${id}`)
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
                    'Cancel',
                    'Your Product is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className="mt-5">
            <Container>
                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            managePruduct.map((pd, index) => <tr>
                                <td>{index}</td>
                                <td>{pd.price}</td>
                                <td>{pd.productName}</td>
                                <td className="text-center ">{
                                    <button className="global-btn px-3 py-2 mt-2" onClick={() => handleCancelOrder(pd._id)} >Delete</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProducts;