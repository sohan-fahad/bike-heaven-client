import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './AddProduct.css'

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({})

    const nameRef = useRef()
    const priceRef = useRef()
    const describeRef = useRef()
    const productImg = useRef()

    const handleResetForm = () => {
        nameRef.current.value = ""
        priceRef.current.value = ""
        describeRef.current.value = ""
        productImg.current.value = ""
    }

    const handleAddInput = e => {
        const field = e.target.name;
        const value = e.target.value
        let newAddService = {...addProduct}
        newAddService[field] = value
        setAddProduct(newAddService)
    }

    const handleAddSubmit =(e)=> {
        e.preventDefault()
        fetch('https://secret-ocean-30546.herokuapp.com/products', {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Product Add Successfuly'
                  )
                setAddProduct({})
                handleResetForm()
            }
        })
    }
    return (
        <div className="add-product">
            <form onSubmit={handleAddSubmit}>
                <input name="productName" ref={nameRef} type="text" placeholder="Product Name" onChange={handleAddInput} />
                <input name="price" ref={priceRef} type="number" placeholder="Price" onChange={handleAddInput} />
                <input name="description" ref={describeRef} type="text" placeholder="Description" onChange={handleAddInput} />
                <input name="productImg" ref={productImg} type="url" placeholder="Image link" onChange={handleAddInput} />
                <input type="submit" value="ADD" className="global-btn" />
            </form>
        </div>
    );
};

export default AddProduct;