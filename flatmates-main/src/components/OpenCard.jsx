import React, { useEffect, useState } from 'react'
import style from "../styles/OpenCard.module.css"
import { useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const OpenCard = () => {
    const ref = useRef(null);
    const [ind, setInd] = useState(1);
    const [data, setdata] = useState();
    // const [id, setId] = useState();
    const { id } = useParams();
    console.log(id,"id")
    const handleLeftClick = () => {
        ref.current.style.transform = `translateX(-${ind * 360}px)`
        setInd((prev) => (prev + 1) % 3)
    }
    useEffect(() => {
        async function fetchData() {
            const url = "http://localhost:9090/api/v1/room/" + id;
            const response = await axios.get(url,{ withCredentials: true });
            setdata(response.data);
            console.log(url,"URL")
        }
        fetchData();
    }, [])
    console.log(data, "data");
    return (
        <>
        {
            data && 
            < div className={style.mainContainer} >
                <div className={style.sidebar}>
                    <div className={style.Card}>
                        <img src={data && data.filename?.[0]} alt="" />
                        <h2>{data && data.name}</h2>
                        <div>
                            <button>Chat</button>
                            <button>Call</button>
                        </div>
                    </div>
                </div>
                <div className={style.rightContainer}>
                    <h2>{data && data.location}</h2>
                    <h2>Hyderabad, Telangana, India</h2>
                    <hr />
                    <h2>Basic Info</h2>
                    <div className={style.basicInfo}>
                        <div>
                            <p>Gender</p>
                            <h3>{data && data.gender}</h3>
                        </div>
                        <div>
                            <p>Approx Rent</p>
                            <h3>{data && data.rent}</h3>
                        </div>
                        <div>
                            <p>Occupancy</p>
                            <h3>Single</h3>
                        </div>
                        <div>
                            <p>Looking for</p>
                            <h3>{data && data.sharing}</h3>
                        </div>
                    </div>
                    <div className={style.pictureContainer} style={{ width: "360px" }}>
                        <button className={style.leftButton} onClick={handleLeftClick}>Left</button>
                        <button className={style.rightButton}>Right</button>
                        <div ref={ref} style={{ display: "flex", transition: "ease 2s" }}>
                            <img src={data && data?.filename[0]} alt="" />
                            <img src={data && data?.filename[1]} alt="" />
                            <img src={data && data?.filename[2]} alt="" />
                        </div>
                    </div>
                    <div>
                        <p>Preferences</p>
                    </div>
                </div>
            </div >
        }
        </>
    )
}

export default OpenCard