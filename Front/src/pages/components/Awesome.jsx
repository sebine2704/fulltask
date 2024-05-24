import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import axios from "axios"
import "./style.css"

const Awesome = () => {
    const {data,setData}=useContext(ProductContext)
    const GetAllData=async ()=>{
        const res=await axios.get("http://localhost:3000/foundation")
        setData(res?.data)
    }
    useEffect(()=>{
        GetAllData()
    },[])
  return (
  <section className='awesome'>
    <div className='datas'>
        {
            data.map((elem)=>(
                <div className='card' key={elem._id}>
                    <img className='img1' src={elem.img} alt="" />
                    <div className='cardbody'>
                        <p>{elem.title}</p>
                        <p>{elem.text}</p>
                    </div>
                </div>
            ))
        }

    </div>

  </section>
  )
}

export default Awesome

