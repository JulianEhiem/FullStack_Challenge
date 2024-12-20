import './App.css'
import {useEffect} from "react";

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const baseURL = "http://localhost:8000/";

function App() {

    useEffect( () => {
        try{
            const response =  fetch(baseURL);
            if(!response.ok){
                // throw new Error(response.statusText);
                console.log(response);
            }

            // const json = response.;
            console.log(response);

        }
        catch(error){
            console.error(error);
            console.log(error.message);
        }

    }, [])

  return (
    <>
        <div>Hello world</div>
    </>
  )
}

export default App
