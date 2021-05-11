import React from 'react';
import TwoProductTable from '../two-product-table/two-product-table.comp';
import './one-product-table.style.css';


const OneProductTable = (props) =>{
    return (
        <div className="one-product-table-container">
            <TwoProductTable productsList={props.productsList}
                             onAddProduct={props.onAddProduct}   
            />

        </div>
    );    
}

export default OneProductTable;