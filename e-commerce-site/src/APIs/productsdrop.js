import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pro from './product'

function DropDown() {

    const [Products, setProducts] = useState([]);

    const show = (event) => {

        const val = event.target.value;
        if (val == 1) {
            axios.get("https://fakestoreapi.com/products/category/jewelery").then((response) => {
                setProducts(response.data);
            })
        }
        else if (val == 2) {
            axios.get("https://fakestoreapi.com/products/category/electronics").then((response) => {
                setProducts(response.data);
            })
        }
        else if (val == 3) {
            axios.get("https://fakestoreapi.com/products/category/men's clothing").then((response) => {
                setProducts(response.data);
            })
        }
        else if (val == 4) {
            axios.get("https://fakestoreapi.com/products/category/women's clothing").then((response) => {
                setProducts(response.data);
            })
        }
        else {
            alert('something wrong');
        }
    }

    /*
    const handleselect= async (event)=>{
        const category = event.target.value;
        const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(res.data);
    }
    */


    return (
        <div>
            <div>
                <select onChange={show}>
                    <option > select item</option>
                    <option value={1}>Jewellary</option>
                    <option value={2}>electronics</option>
                    <option value={3}>men's wear</option>
                    <option value={4}>women's wear</option>
                </select>
            </div>

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



        </div>
    )

}

export default DropDown;