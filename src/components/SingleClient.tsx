import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Client, clients } from './ClientData'

const SingleClient = () => {
// let {currentId}=useParams()
const location=useLocation()
const {name} = location.state
let [currentClient, setCurrentClient]=useState<Client | undefined>(undefined)
// function findClient(client:Client){
//     if (client.id.toString()==currentId)
//     setCurrentClient(client)
// } 
useEffect(() => {
setCurrentClient(name)

}, [])
console.log(currentClient)
return (
    <div>SingleClient


        <div>{currentClient?.name} </div>
        <div> Balance: ${currentClient?.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  <div> Status: {currentClient?.isActiveClient? 'Active' : 'Not active'}</div>
    </div>
  )
}

export default SingleClient