import React from 'react'
import {Breadcrumb,Button,Typography} from 'antd'
import TicketTable from '../../components/tickets-table'

const Dashboard = () => {
  const tickets= [
    {
        ticket_id: '1',
        issue: 'Server support',
        status: "pending"
    },
    {
        ticket_id: '2',
        issue: 'Dashboard styling',
        status: "pending"
    },
    {
        ticket_id: '3',
        issue: 'Frontend prototytping',
        status: "pending"
    },
    {
        ticket_id: '4',
        issue: 'Frontend prototytping',
        status: "pending"
    },
    {
        ticket_id: '5',
        issue: 'Frontend prototytping',
        status: "pending"
    },
    {
        ticket_id: '6',
        issue: 'Frontend prototytping',
        status: "pending"
    },
];
  return (
    <div className='bg-red-500 h-full px-2 py-4'>
      <Breadcrumb
      items={[
        {
          title: <a href="">Home</a>,
        },
        {
          title: <a href="">Dashboard</a>,
        }
      ]}
      />

      <div className='text-center pt-8'>
      <Button className='bg-blue-400 w-4/12' >Add new ticket</Button>
      <p className='pt-4'>Total tickets : 50</p>
      <p>Pending : 50</p>
      </div>
      <div>
        <Typography.Title>Recently added tickets</Typography.Title>
        <div>
          <TicketTable tickets={tickets}/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard