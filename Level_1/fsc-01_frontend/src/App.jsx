import './App.css'
import {useEffect, useState} from "react";

const baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const getData = async () => {
            try{
                const response = await fetch(baseURL);
                if(!response.ok){
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setProducts(data);
                console.log(data)
            }
            catch(error){
                console.error(error);
            }
        }; getData();
    }, [])

  return (
    <>
        <div>List of data:</div>
        <ul>
            {products && products.map((product) => (
                <li key={product.id}>{product.brand}</li>
            ))}
        </ul>
    </>
  )
}

export default App
