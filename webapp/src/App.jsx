import { useState } from 'react'
import './App.css'
import Entry from "./pages/Entry.page/entryLogin.jsx"
import DefaultLayout from './layout/defaultLayout'
import Dashboard from './pages/Dashboard.page/dashboard'
import AddTicketsPage from './pages/AddTickets.page/addTickets'
import TicketList from './pages/TicketListing.page/TicketList.page.jsx'
function App() {


  return (
    <>
      <DefaultLayout>
      {/* <Entry/> */}
       {/* <Dashboard/> */}
       {/* <AddTicketsPage/> */}
       <TicketList/>
      </DefaultLayout>
      
    </>
  )
}

export default App
