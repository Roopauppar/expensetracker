import React from 'react'
import './dashboard.css'
import Main from './main'
import Details from './details'
import Transaction from './transaction'

const Dashboard = () => {
  return (
    <>
      <div className=' row mt-5'>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Main />
        </div>
        <div className=' col-lg-8 col-md-8 col-sm-12 mt-2'>
          <div className="tracker form">
            <Details title="Income" />
            <Details title="Expense" />
          </div>
          
          <div className=' form mt-2'>
            <Transaction />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard