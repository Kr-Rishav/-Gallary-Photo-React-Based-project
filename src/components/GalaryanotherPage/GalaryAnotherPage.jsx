import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function GalaryAnotherPage() {

  const {id} = useParams();
  const [photo, setPhoto] = useState({});

  async function downloadPerticularPhoto(){
    const response = axios.get(`https://api.slingacademy.com/v1/sample-data/photos?limit=21/${id}`);
    console.log("Response", response);
  }

  useEffect(()=>{
    downloadPerticularPhoto()
  },[])

  return (
    <div>GalaryAnotherPage</div>
  )
}

export default GalaryAnotherPage