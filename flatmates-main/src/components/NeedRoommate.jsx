import React from 'react'
import { useState } from 'react'
import style from '../styles/NeedRoommate.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const NeedRoommate = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedBtn1, setselectedBtn1] = useState(null);
  const [file, setFile] = useState([]);
  const [data, setData] = useState({
    name: "",
    location: "",
    gender: "",
    rent: "",
    sharing: ""
  });
  const navigate = useNavigate();
  const singleButton = async (index) => {
    setSelectedBtn(index);
  }
  const singleButton1 = (index) => {
    setselectedBtn1(index);
  }
  const handleClose = () => {
    navigate("/");
  }
  const handleSubmit = () => {
    if (selectedBtn === 1) {
      setData((prev) => {
        return ({
          ...prev,
          gender: "male"
        })
      })
    }
    if (selectedBtn === 2) {
      setData((prev) => {
        return ({
          ...prev,
          gender: "female"
        })
      })
    }
    if (selectedBtn === 3) {
      setData((prev) => {
        return ({
          ...prev,
          gender: "others"
        })
      })
    }
    if (selectedBtn1 === 1) {
      setData((prev) => {
        return ({
          ...prev,
          sharing: "Single"
        })
      })
    }

    if (selectedBtn1 === 2) {
      setData((prev) => {
        return ({
          ...prev,
          sharing: "Shared"
        })
      })
    }

    if (selectedBtn1 === 3) {
      setData((prev) => {
        return ({
          ...prev,
          sharing: "Others"
        })
      })
    }
    const formdata = new FormData();
    formdata.append("location", data.location);
    formdata.append("gender", data.gender);
    formdata.append("rent", data.rent);
    formdata.append("sharing", data.sharing);
    formdata.append("name", data.name);
    for (let i = 0; i < file.length; i++) {
      formdata.append("file", file[i]);
    }
    async function sendData() {
      const response = await axios.post("http://localhost:9090/api/v1/newroommate", formdata);
      console.log(response);
    }
    sendData();
    navigate("/");
  }
  const handleFile = (e) => {
    setFile(e.target.files);
    
  }
  console.log(file);
  console.log(data);

  return (
    <div className={style.mainContainer}>
      <div className={style.formContainer}>
        <div style={{ float: "right", marginRight: "10px", cursor: "pointer" }} onClick={handleClose}>
          <span class="material-symbols-outlined">
            close
          </span>
        </div>
        <h1 style={{ width: "max-content", margin: "auto", marginTop: "80px" }}>Add your room details</h1>
        <p style={{ width: "max-content", margin: "auto" }}>So that others can contact you</p>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <h4>Name</h4>
          <input type="text" onChange={(e) => {
            setData((prev) => {
              return ({
                ...prev,
                name: e.target.value
              })
            })
          }} />
        </div>
        <div className={style.firstContainer}>
          <div >
            <label>Add you Location</label>
            <div className={style.locationInput}>
              <div><input type="text" onChange={(e) => {
                setData((prev) => {
                  return ({
                    ...prev,
                    location: e.target.value
                  })
                })
              }} style={{ padding: "10px", paddingLeft: "30px", backgroundColor: "#E5E7EB", borderRadius: "10px" }} /></div>
              <span class="material-symbols-outlined" style={{ position: "absolute" }}>
                location_on
              </span>
            </div>
          </div>
          <div >
            <label style={{ marginLefat: "10px" }}>Looking for </label>
            <div className={style.genderInputs}>
              <button id='button1' style={{ backgroundColor: selectedBtn == 1 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(1) }}></button>
              <label htmlFor="">Male</label>
              <button id='button1' style={{ backgroundColor: selectedBtn == 2 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(2) }}></button>
              <label htmlFor="">Female</label>
              <button id='button1' style={{ backgroundColor: selectedBtn == 3 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(3) }}></button>
              <label htmlFor="">Others</label>
            </div>
          </div>
        </div>
        <div className={style.firstContainer}>
          <div >
            <label>Approx Rent</label>
            <div className={style.locationInput}>
              <div><input onChange={(e) => {
                setData((prev) => {
                  return (
                    {
                      ...prev,
                      rent: e.target.value
                    }
                  )
                })
              }} type="text" style={{ padding: "10px", paddingLeft: "30px", backgroundColor: "#E5E7EB" }} /></div>
              <span class="material-symbols-outlined" style={{ position: "absolute" }}>
                currency_rupee
              </span>
            </div>
          </div>
          <div >
            <label style={{ marginLaeft: "10px" }}>Occupancy </label>
            <div className={style.genderInputs}>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 1 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(1) }}></button>
              <label htmlFor="">Single</label>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 2 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(2) }}></button>
              <label htmlFor="">Shared</label>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 3 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(3) }}></button>
              <label htmlFor="">Others</label>
            </div>
          </div>
        </div>
        <div className={style.uploadContainer}>
          <h4 style={{ maxWidth: "max-content", margin: "auto" }}>Upload your 3 photos here</h4>
          <div className={style.uploadBox}>
            <input type="file" onChange={(e) => { handleFile(e) }} multiple />
          </div>
          <div style={{ maxWidth: "max-content", margin: "auto" }}><p>You can upload images upto 25 MB</p></div>
        </div>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <button onClick={handleSubmit} style={{ margin: "auto", width: "max-content", display: "block", backgroundColor: "#15B36A", color: "white", cursor: "pointer" }}>Submit</button>
          <h3 style={{ width: "max-content", margin: "auto" }}>Have room & need roommate</h3>

        </div>
      </div>
    </div>
  )
}

export default NeedRoommate;