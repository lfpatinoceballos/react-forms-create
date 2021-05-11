import React from 'react';
import './articulo-product-row.style.css';

const ArticuloProductRow = (props) => {
    return (
        <div className="articulo-product-row-container">

          {
              props.product.stock === 0
              ?
                <span className="articulo-without-stock">{props.product.name}</span>
              :
                <span>{props.product.name}</span> 
          }
          {''}{''} ${props.product.price}
        </div>
    );    
}

export default ArticuloProductRow;