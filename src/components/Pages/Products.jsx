import React from "react"; 
import PhotoFetching  from '../Data/ProductsData';
import './Product.css'


function Products (){
    return(
        <div className="products">
            <h5>Products</h5>
            <div className="piclist">
            <PhotoFetching />
            </div>
        </div>
    )
}
export default Products;