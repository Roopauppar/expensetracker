import React from 'react'
import './dashboard.css'
import Main from './main'
import Details from './details'
import Transaction from './transaction'

const Dashboard = () => {
  return (
    <div className="dashboard grid grid-cols-3 h-screen">
      <div className="main p-6">
        <Main />
      </div>
      <div className=" details col-span-2">
        <div className="grid grid-rows-2 h-full">
          <div className="tracker form pt-4 grid grid-cols-2">
            <Details title="Income" />
            <Details title="Expense" />
          </div>
          <div className="transcation form p-6">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard