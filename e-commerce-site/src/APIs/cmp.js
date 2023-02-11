import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Pro from './product';

function Cmp() {

    const [Products, setProducts] = useState([]);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data);
        })

    }, []);

    return (
        <div >
            <ul style={{ 
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {
                    Products.map((product) => {
                        return <Pro proobj={product}></Pro>
                    })
                }
                
                {/* <li>{Product.length>0 && Product[0].title}</li> */}
            </ul>
        </div>
    )

}

export default Cmp