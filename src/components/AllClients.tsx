import React from 'react'
import { clients, Client, Transactions } from './ClientData'
import { Link, Route, Routes, useParams } from "react-router-dom";
import SingleClient from './SingleClient';
type SectionProps={
    clients:Client[],
}
const AllClients = ({clients}:SectionProps) => {

  return (
    <div>

<h1> AllClients</h1>
<div id='allClients'>

{clients.map((client)=>(
    <div className='eachClients' key={client.id}>
       {/* <Routes>
    <Route path="/singleClient" element={<SingleClient props={{client:client}}/>}/>

    </Routes>  */}
        <Link  to={'/singleClient'}  state={{ name:client }} > 
 Name: {client.name}
        </Link>
  <div> Balance: ${client.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  <div> Status: {client.isActiveClient? 'Active' : 'Not active'}</div>
  </div>
))}
</div>
    </div>
  )
}

export default AllClients