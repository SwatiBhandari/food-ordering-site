import React from 'react'
import "./Users.css"
import Sidebar from './Sidebar'
import {Table} from 'react-bootstrap';
import { db } from '../firebase';

function Users() {

    function GetAllDataOnce(){
        db.collection("Users").get().then((querySnapshot)=>{
          var Users =[];
          querySnapshot.forEach(doc => {
              Users.push(doc.data());
            
          });
          AddAllItemsToTheTable(Users);
        });
      }
    
      function GetAllDataReal(){
        db.collection('Users').onSnapshot((querySnapshot)=>{
          var Users=[];
          querySnapshot.forEach(doc =>{
            Users.push(doc.data());
          });
          AddAllItemsToTheTable(Users);
        });
      }
    
      var usrNo=0;
      var tbody=document.getElementById('tbody1');
    
      function AddItemToTable(email){
        var trow= document.createElement('tr');
        var td1= document.createElement('td');
        var td2= document.createElement('td');
    
        td1.innerHTML= ++usrNo;
        td2.innerHTML= email;
    
        trow.appendChild(td1);
        trow.appendChild(td2);
    
        tbody.appendChild(trow);
    
      }
    
      function AddAllItemsToTheTable(UsersDocsList){
        usrNo=0;
        tbody.innerHTML="";
        UsersDocsList.forEach(element =>{
            AddItemToTable(element.email)
        });
      }
    
      window.onload=GetAllDataOnce;
  return (
    <div className='Users'>
        <div className='UsersGlass'>
            <Sidebar />
            <div className='heading_users'>
                <h2>Users</h2>
                <Table className='User_table'>
                    <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody onLoad={GetAllDataOnce()} id='tbody1'></tbody>
                </Table>
            </div>

        </div>
      
    </div>
  )
}

export default Users
