import React from 'react'
import AllClients from './AllClients'
import { clients } from './ClientData'

const Home = () => {
  return (
    <div>

<AllClients clients={clients}/>

    </div>
  )
}

export default Home