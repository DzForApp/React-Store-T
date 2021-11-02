 
import React ,{useState} from "react"; 
import { Link } from 'react-router-dom'; 
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Data} from "./Data";
import { IconContext } from "react-icons/lib";
import { CloseButton } from "react-bootstrap";
import './products.css'

function ProdList () {
   
   return (
   <div>
        <div className='prod_list' >
     
    
        {Data.map((item, index) => { 
            return (
                <Link  to={item.path} key={index} className={item.cName}>
                    <div className="prod_box" >
                        
                        
                       
                            <img src={item.url} alt="noImg" width="250" height="250" />
                     <div>
                             <h4>{item.title}</h4>
                        </div>
                    </div>
                </Link>
                    
            )
        })}
    

         </div>
</div>
   );
}
export default ProdList;