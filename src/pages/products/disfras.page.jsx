import React, {useState} from 'react';
import OneProductTable from './components/one-product-table/one-product-table.comp'

const ProductsDisfrasPage = () =>{



    let productsList = [
            {
                id:"d1",
                name:'Frutas y Verduras',
                products:[
                    {
                        id:"d1p1",
                        name:"Aguacate",
                        price:2500,
                        stock: 15,
                    },
                    {
                        id:"d1p2",
                        name:"Mango",
                        price:2000,
                        stock: 2,
                    },
                    {
                        id:"d1p3",
                        name:"Pera",
                        price:2000,
                        stock:0,
                    }
                ]
            },
            {
                id:"d2",
                name:'Lacteos',
                products:[
                    {
                        id:"d2p1",
                        name:"Yogurt",
                        price:2500,
                        stock: 15,
                    },
                    {
                        id:"d2p2",
                        name:"Leche",
                        price:2000,
                        stock: 0,
                    },
                    {
                        id:"d2p3",
                        name:"Queso",
                        price:2000,
                        stock:1,
                    },

                ]
            },

    ];  
    
    const[products, setproducts] = useState(productsList);

    

    return (
        <>
            <OneProductTable
                 productsList={products}
                 onAddProduct={(newProduct, categoryId)=>{
                     const newProducts = [];
                     for(let i=0; i<products.length; i++){
                         if(products[i].id !== categoryId){
                             newProducts.push(products[i]);
                         }
                         else{
                            newProducts.push(
                                {
                                    ...products[i],
                                    products:[...products[i].products, newProduct] 
                                }
                                );    
                         }
                         
                     }
                       setproducts(newProducts); 
                 }}
            />
            
        </>
    );    
}

export default ProductsDisfrasPage;