import React from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Technology = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
        axios.get("https://backend-api-hvjn.onrender.com/api/category/technology")
        .then((response)=>setData(response.data))
        .catch((error)=>console.log("Error",error))
    },[])
  return (
    <>
    <Navbar/>
    <div className="page-heading">Technology <hr className="hr-under"></hr></div>
    <div className='latest'>
    <div>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===21}).map((element)=>(
      <div className='latest1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
    ))
    }
    </div>
    <div>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===22}).map((element)=>(
      <div className='latest2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
    ))
    }
    </div>
    <div>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===23}).map((element)=>(
      <div className='latest3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link> 
        <p>{element.DataDescription}</p>
        </div>
    ))
    }
    </div>
    </div>
    <div className='data-container'>
    <div className='data'>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===24}).map((element)=>(
      <div className='data1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===25}).map((element)=>(
      <div className='data2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===26}).map((element)=>(
      <div className='data3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===27}).map((element)=>(
      <div className='data4' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===28}).map((element)=>(
      <div className='data5' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===29}).map((element)=>(
      <div className='data6' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===30}).map((element)=>(
      <div className='data7' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===31}).map((element)=>(
      <div className='data8' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===32}).map((element)=>(
      <div className='data9' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===33}).map((element)=>(
      <div className='data10' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===34}).map((element)=>(
      <div className='data11' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="technology" && item.id===35}).map((element)=>(
      <div className='data12' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    </div>
    <div className='top-posts'>
      <div className='top-posts-heading'>Top Posts <hr className="hr-under3"></hr></div>
      {
    data.filter((item)=> {return item.category==="technology" && item.id===36}).map((element)=>(
      <div className='top-post1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>1</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="technology" && item.id===37}).map((element)=>(
      <div className='top-post2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>2</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="technology" && item.id===38}).map((element)=>(
      <div className='top-post3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>3</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="technology" && item.id===39}).map((element)=>(
      <div className='top-post4' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>4</h1>
        </div>
    ))
    }
    <hr></hr>
    </div>
    <div className='advertisement'>Advertisement</div>
    </div>
    <div className='load-more'><AiOutlineArrowDown/>LOAD MORE</div>
    </>
  )
}

export default Technology