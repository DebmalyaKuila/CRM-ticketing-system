import React from 'react'
import { Table } from "antd"

const TicketTable = ({tickets}) => {

    const dataSource =tickets

    const columns = [
        {
            title: '#',
            dataIndex: 'ticket_id',
            key: 'ticket_id',
        },
        {
            title: 'Issue',
            dataIndex: 'issue',
            key: 'issue',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} scroll={{
            y: 210,
          }}
          pagination={{
            pageSize: 25,
          }}
          rowKey='ticket_id'
          bordered
          locale={
            {
                emptyText: 'No Tickets issued'
            }
          }
          />
    )
}

export default TicketTable