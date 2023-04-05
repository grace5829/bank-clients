import React from 'react'
import { clients, Client, Transactions } from './ClientData'
import { Link, useParams } from "react-router-dom";
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
        <Link  to='/singleClient' > 
 Name: {client.name}
        </Link>
  <div> Balance: ${client.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  <div> Balance: {client.isActiveClient? 'Active' : 'Not active'}</div>
  </div>
))}
</div>
    </div>
  )
}

export default AllClients