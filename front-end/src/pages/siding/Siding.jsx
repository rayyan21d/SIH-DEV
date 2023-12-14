import React from 'react'
import { useParams } from 'react-router-dom'

function Siding() {

  const {id} = useParams()


  return (
    <div>Siding {id} </div>
  )
}

export default Siding