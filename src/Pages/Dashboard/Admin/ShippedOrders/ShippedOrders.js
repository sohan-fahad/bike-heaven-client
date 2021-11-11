import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ShippedOrders = ({orders, handleCancelOrder, handleStatus, statusRef}) => {
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

export default ShippedOrders;