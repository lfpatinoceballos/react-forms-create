import React from 'react';
import './articulo-category-row.style.css';

const ArticuloCategoryRow = (props) => {
    return (
        <div className="articulo-category-row-container">
          {props.categoryName}  
        </div>
    );    
}

export default ArticuloCategoryRow;