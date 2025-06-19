import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const ImagesCards = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const fetcheddata = await axios.get("https://picsum.photos/v2/list");
            setData(fetcheddata.data);
        }
        fetchData();
    }, []);
    console.log(data);
    return (
        <div>
            {data.map((item)=>{
                return <img src={"https://unsplash.com/photos/yC-Yzbqy7PY"} alt="" />
            })}
        </div>
    )
}

export default ImagesCards