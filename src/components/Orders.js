import React from 'react'
import Sidebar from './Sidebar'
import "./Orders.css"
import { db } from '../firebase'
import {Table} from 'react-bootstrap'


function Orders() {

  function GetAllDataOnce(){
    db.collection("orders").get().then((querySnapshot)=>{
      var students =[];
      querySnapshot.forEach(doc => {
          students.push(doc.data());
        
      });
      AddAllItemsToTheTable(students);
    });
  }

  function GetAllDataReal(){
    db.collection('orders').onSnapshot((querySnapshot)=>{
      var students=[];
      querySnapshot.forEach(doc =>{
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


  return (
    <div className='Orders'>
      <div className='OrderGlass'>
        <Sidebar />
        <div className='heading_orders'>
          <h2>Orders</h2>
          <Table className='Order_table'>
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

      </div>
      
    </div>
  )
}

export default Orders

