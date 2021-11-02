import React from "react"; 
import ProdList from "../Data/ProdList";

 
import './Product.css'


function Products (){
    return(
        <div className="products">
            <div>
                <h5>Products</h5>
            </div>

            <div className="piclist">
             <ProdList />
            </div>
        </div>
    )
}
export default Products;