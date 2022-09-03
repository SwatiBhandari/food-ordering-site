import React, { useState } from 'react'
import Card from './Card'
import './MainDash.css'
import { db } from '../firebase';
import {Table} from 'react-bootstrap';
function MainDash() {
  const [ordersCount, setOrdersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  function GetAllDataOnce(){
    db.collection("orders").get().then((querySnapshot)=>{
      var students =[];
      querySnapshot.forEach(doc => {
          students.push(doc.data());
        
      });
      AddAllItemsToTheTable(students);
    });
  }


  var stdNo=0;
  var tbody=document.getElementById('tbody1');

  function AddItemToTable(name,email,address,amount){
    var trow= document.createElement('tr');
    var td1= document.createElement('td');
    var td2= document.createElement('td');
    var td3= document.createElement('td');
    var td4= document.createElement('td');
    var td5= document.createElement('td');

    td1.innerHTML= ++stdNo;
    td2.innerHTML= name;
    td3.innerHTML=email;
    td4.innerHTML=address;
    td5.innerHTML=amount;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);

  }

  function AddAllItemsToTheTable(StudentsDocsList){
    stdNo=0;
    tbody.innerHTML="";
    StudentsDocsList.forEach(element =>{
        AddItemToTable(element.name,element.email,element.address,element.amount)
    });
  }
  
  window.onload=GetAllDataOnce;

  const query = db.collection("orders");
  const snapshot = query.get().then(snap => {
    setOrdersCount(snap.size)
  });

  const snapshot1= db.collection('Users').get().then(snap => {
    setUsersCount(snap.size)
  });

  return (
    <div className='MainDash'>
      <h2>DashBoard</h2>
      <div className='dash'>
      <Card
      title="Orders"
      value={ordersCount}
      logoUrl="https://img.icons8.com/external-glyph-mangsaabguru-/344/external-order-shop-glyph-glyph-mangsaabguru-.png"
      />
      <Card
      title="Amount"
      value=''
      logoUrl="https://img.icons8.com/material-rounded/344/rupee.png"
      />
      <Card
      title="Users"
      value={usersCount}
      logoUrl="https://img.icons8.com/ios-glyphs/344/group.png"
      />
      </div>
      <h2>Recent Orders</h2>
      <Table className='recent_order_table'>
        <thead>
          <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Amount</th>
          </tr>
        </thead>
        <tbody onLoad={GetAllDataOnce()} id='tbody1'></tbody>
      </Table>
    </div>
  )
}

export default MainDash
