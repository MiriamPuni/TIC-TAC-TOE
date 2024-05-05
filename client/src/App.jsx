import React from 'react'
import apiReq from './function/apiReq'
export default function App() {
  let data = apiReq().then(res=>console.log(res.data))
  return (
    <div>
    </div>
  )
}
