import { useEffect } from "react";
import "./app.css";
import Layout from "./components/Layout/Layout";
import axios from "axios";

function App() {

    useEffect(() => {
    axios.get("http://localhost:8000/api").then((res) => {
    console.log(res)
})

    }, [])  

  return <Layout />;
}

export default App;
