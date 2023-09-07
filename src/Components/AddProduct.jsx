import React, { useState } from 'react'
import ProductService from '../Service/product.service'

const AddProduct = () => {

    const[product,setProduct]=useState({
        productName:"",
        description:"",
        price:"",
        status:""
    });

    const[msg,setMsg]=useState("");


    const handleChange=(e)=>{
        const value = e.target.value;
        setProduct({...product,[e.target.name] : value})
    }

 const ProductRegister=(e)=>{
    e.preventDefault();
     console.log(product);

    ProductService
     .AddProducts(product)
    .then((res)=>{
        // console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
    }).catch((error)=>{
        console.log(error);
    })
    ;
 }

  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header fs-3 text-center">
                        Add Product
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={(e)=>ProductRegister(e)}>
                           <div className="md-3">
                            <label htmlFor="">Enter Product Name</label>
                            <input type="text" name="productName" className='form-control'  onChange={(e)=>handleChange(e)} />
                           </div>
                           <div className="md-3">
                            <label htmlFor="">Enter Description</label>
                            <input type="text" name="description" className='form-control'  onChange={(e)=>handleChange(e)} />
                           </div>
                           <div className="md-3">
                            <label htmlFor="">Enter Price</label>
                            <input type="text" name="price" className='form-control'  onChange={(e)=>handleChange(e)} />
                           </div>
                           <div className="md-3">
                            <label htmlFor="">Enter Status</label>
                            <input type="text" name="status" className='form-control' onChange={(e)=>handleChange(e)}  />
                           </div>
                           <button className='btn btn-primary col-md-12'>Submit</button>
                        </form>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProduct
