import React from 'react';
import { Container, Table } from 'react-bootstrap';

const PendingOrders = ({orders, handleCancelOrder, handleStatus, statusRef}) => {
    console.log(orders);
    return (
        <div>
            <Container>
                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
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
                                <td>{pd.name}</td>
                                <td>{pd.email}</td>
                                <td>{pd.price}</td>
                                <td>{pd.productName}</td>
                                <td className="d-flex align-items-center justify-content-center">
                                    <input type="submit" value="PENDING" className="global-btn px-3 py-2 mt-2 me-3" onClick={() => {
                                        handleStatus(pd._id)
                                    }} />

                                </td>
                                <td className="text-center ">{
                                    <button className="global-btn px-3 py-2 mt-2" onClick={() => handleCancelOrder(pd._id, "APPROVED")} >Cencel</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default PendingOrders;