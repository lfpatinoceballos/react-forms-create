import React, { useState } from 'react';
import ArticuloCategoryRow from '../articulo-category-row/articulo-category-row.comp';
import ArticuloProductRow from '../articulo-product-row/articulo-product-row.comp';
import './two-product-table.style.css';

const TwoProductTable = (props) =>{

    const[category, setCategory]= useState('d1');
    const[name, setName]= useState('');
    const[price, setPrice]= useState(0);
    const[stock, setStock]= useState(0);
    
    const addproduct =(event)=>{
        event.preventDefault();
        const newProduct ={
            id:name,
            name:name,
            price:parseFloat(price),
            stock:parseFloat(stock),
        };
        props.onAddProduct(newProduct, category);
        
    }


    return (
        <div className="two-product-table-container">
            <div>

            {props.productsList.map((category, index)=>{
                return (
                     <React.Fragment key={category.id}>
                        <ArticuloCategoryRow categoryName={category.name}/>
                        {category.products.map((product, indexProduct)=>{
                            return(
                                <ArticuloProductRow 
                                key={product.id} 
                                product={product}/>    
                            );

                        })}
                     </React.Fragment>
                );
            })}
            </div>
            <div className="products-form"> 
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                     Agregar Producto
                                </td>
                            
                            </tr>
                            <tr>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="d1">Frutas y Verduras</option>
                                        <option value="d2">Lacteos</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre del Producto</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        value={name} 
                                        onChange={(event)=>{
                                         setName(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Precio</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={price} 
                                        onChange={(event)=>{
                                         setPrice(event.target.value);
                                        }}
                                    />
                                </td>    
                            </tr>
                            <tr>
                                <td>Disponibilidad</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={stock} 
                                        onChange={(event)=>{
                                         setStock(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                                <tr>
                                    <td>
                                        <button
                                            onClick={addproduct}
                                        >
                                            Agregar Producto
                                        </button>

                                    </td>
                            
                                </tr>
                        </tbody>
                    </table>
                     
                </form>
            </div>
        </div>
    );    
}

export default TwoProductTable;