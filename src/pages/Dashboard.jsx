import React from 'react'

import Table from '../components/table/Table'
import {Link} from "react-router-dom"
import Chart from 'react-apexcharts'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Badge from '../components/badge/Badge'

const chartoptions= {
    series:[{
       name:'Online PON' ,
       data:[40,70,20,90,36,80,30,91,60]
    },{
        name:'Store ONT',
        data:[40,30,70,80,40,16,40,20,51,10]
    }],
    options:{
       color:['#6ab04c','#2980b9'] ,
       chart:{
           background:'transparent'
       },
       dataLabels:{
           enabled:false
       },
       stroke: {
           curve:'smooth'
       },
       xaxis:{
           categories:['jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
       },
       legend :{
           position:'top'
       },
       grid:{
           show:false
       }
    }
}


const topCustomers = {
   head:[
       'user',
       'total orders',
       'total spending'
   ],
   body:[
       {
          "username": " john Doe",
          "order": " 490",
          "price": " $15,810"
       },
        {
          "username":"john Doe",
          "order":"490",
          "price":"$15,810"
       },
        {
          "username":"john Doe",
          "order":"490",
          "price":"$15,810"
       },
        
       
   ]
}

const latestData = {
    head:[
     
          'Object ID',
          'asamIfExtCustomerId',
          'ifAdminStatus',
          'ifOperStatus'
          //'status'
     
    ],
    body:[
        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"down"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"down"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"up"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"down"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"up"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"up"
            
        },

        {
            id:"R1.S1.LT2.PON1.ONT19.C1.P2",
            customerid:"available",
            ifadminstatus:"up",
            ifoperstatus:"down"
            
        }
        /*,
         {
            id:"#00124",
            user:"John Doe",
            date:"28-07-2021",
            price:"$900",
            status:"shipping"
        }*/

         
    ]
}



const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item,index)=>(
    <th key={index}>{item}</th>
)

const renderOrderBody = (item,index)=>(
    <tr key={index}>
       <td> {item.id}</td>
       <td> {item.customerid}</td>
       <td> {item.ifadminstatus}</td>
       <td> {item.ifoperstatus}</td>
      
      
    </tr>
)

const renderCustomerHead = (item,index)=>(
    <th key={index}>{item}</th>
)

const renderCustomersBody = (item,index)=>(
    <tr key={index}>
       <td> {item.username}</td>
       <td> {item.order}</td>
       <td> {item.price}</td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
              <div className="col-6">
               <div className='row'>
                 {
                     statusCards.map((item,index)=>(
                         <div className="col-6">
                          
                          <StatusCard
                             icon={item.icon}
                             count={item.count}
                             title={item.title}
                          />
                         </div>
                     ))
                 }
               </div>
              </div>
              <div className="col-6">
                <div className="card full-height">
                    {/*  */}
                    <Chart
                        options={chartoptions.options}
                        series={chartoptions.series}
                        type='line'
                        height='100%'
                    />
                </div>
              </div>
              <div className="col-4" >
                  <div className="card">
                    <div className="card-header">
                       <h3> ISAM ONT</h3>
                    </div>
                    <div className="card-body">
                      {/*  table */}
                      <Table
                         headData={topCustomers.head}
                         renderHead={(item,index)=>renderCustomerHead(item, index)}
                         bodyData={topCustomers.body}
                         renderBody={(item,index)=> renderCustomersBody(item, index)}
                      />
                    </div>
                    <div className="card-footer">
                     <Link to="/"> View All </Link>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card">
                    <div className="card-header">
                      <h3>Latest Data ONT VEIP PORT</h3>
                    </div>
                    <div className="card-body">
                      <Table
                         headData={latestData.head}
                         renderHead={(item,index)=>renderOrderHead(item, index)}
                         bodyData={latestData.body}
                         renderBody={(item,index)=> renderOrderBody(item, index)}
                      />
                    </div>
                    <div className="card-footer">
                      <Link to="/">View All</Link>
                    </div>
                  </div>
                </div>
              
            </div>
        </div>
    )
}

export default Dashboard
