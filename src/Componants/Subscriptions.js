import DataTable from "react-data-table-component";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs"
import { useState } from "react";
import { data } from "./Data";
import './Subscriptions.css'
import Redis from '../Redis.png'
import Filters from "./Filers";
import AddSub from "./AddSub";

function Subscriptions(){

const  [subscriptions, setSubscriptions] = useState(data)
const [filteredSubscriptions, setFilteredSubscriptions] = useState(null);

  const columns = [
    {
      name: 'Image',
      cell: (row) => <img src={row.image} alt={row.name} style={{ width: '50px' }} />,
    },
    {
      name:'Name',
      selector: row => row.name,
      sortable: true,
      cell: (row) =>
          row.isEditing ? (
            <input
              type="text"
              name="name"
              value={row.name}
              onChange={(event) => handleSelectChange(event, row.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSaveRow(row.id);
                }
              }}
            />
          ) : (
            row.name
          )
      },
    {
      name:'Response',
      selector: row => row.response,
      sortable: true,
      cell: (row) => (
        <div><button className="con-button">View Connection</button></div>
        )
      },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: (row) => <span className={`Status ${row.status === 'New' ? 'status-new' : row.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
    {row.status}</span>
     
    },
    {
      name: 'SaaS Service',
      selector: row => row.saasService,
      sortable: true,
      cell: (row) =>
          row.isEditing ? (
            <select className="dropdown-select"
              name="saasService"
              value={row.saasService}
              onChange={(event) => handleSelectChange(event, row.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSaveRow(row.id);
                }
              }}
            >
              <option value="Redis Cluster">Redis Cluster</option>
              <option value="Redis Sentinal">Redis Sentinal</option>
              <option value="Postgres">Postgres</option>
            </select>
          ) : (
            row.saasService
          )
      },
    {
      name:'Enviromnt',
      selector: row => row.env,
      sortable: true,
      cell: (row) =>
          row.isEditing ? (
            <select className="dropdown-select"
              name="env"
              value={row.env}
              onChange={(event) => handleSelectChange(event, row.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSaveRow(row.id);
                }
              }}
            >
              <option value="Development">Development</option>
              <option value="Test">Test</option>
              <option value="Preprod">Pre-Prod</option>
              <option value="prod">Production</option>
            </select>
          ) : (
            row.env  
          )     
      },
      {
        name:'Actions',
        cell: (row) => (
          <div >
            <button onClick={() => handleDelete(row.id)} className="icon-btn">
                <BsFillTrashFill className="trash-icon" /></button>
            <button onClick={() => handleEditRow(row.id)} className="icon-btn"> 
                <BsFillPencilFill /></button>
          </div>
          ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true 
        }
    ]; 


    const addNewRow = () => {
      const newRow = { 
        id: subscriptions.length + 1,
        image: `${Redis}`,
        name: 'New Subscription',
        response: 'show connection',
        status: 'New',
        saasService: 'SaaS Service ',
        env: 'Development'
      } 
      setSubscriptions([...subscriptions, newRow]);
      setFilteredSubscriptions(null);
    }

    
   const handleDelete = (id) => {
    const updatedSubscriptions = subscriptions.filter((item) => item.id !== id);
    setSubscriptions(updatedSubscriptions);
    setFilteredSubscriptions(null);
  };

   const handleEditRow = (rowId) => {
    const updatedSubscriptions = subscriptions.map((row) => {
      if (row.id === rowId) {
        return { ...row, isEditing: true };
      }
      return row;
    });
    setSubscriptions(updatedSubscriptions);
    setFilteredSubscriptions(null);
  };

   const handleSelectChange = (event, rowId) => {
    const { name, value } = event.target;
    const updatedSubscriptions = subscriptions.map((row) => {
      if (row.id === rowId) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setSubscriptions(updatedSubscriptions);
    setFilteredSubscriptions(null);
  };

   const handleSaveRow = (rowId) => {
    const updatedSubscriptions = subscriptions.map((row) => {
      if (row.id === rowId) {
        return { ...row, isEditing: false };
      }
      return row;
    });
    setSubscriptions(updatedSubscriptions);
    setFilteredSubscriptions(null);
  };

  
  const handleFilterByStatus = (event) => {
    const status = event.target.value;
    if (status === 'All') {
      setFilteredSubscriptions(null);
      setSubscriptions(subscriptions);
    }else{
      const filteredData = subscriptions.filter((row) => row.status === status);
      setFilteredSubscriptions(filteredData);
    }    
  };


  const handleFilterBySaasService = (event) => {
    const saasService = event.target.value;
    if (saasService === 'All'){
      setFilteredSubscriptions(null);
      setSubscriptions(subscriptions);
    } else{
      const filteredData = subscriptions.filter((row) => row.saasService === saasService);
      setFilteredSubscriptions(filteredData);
    }
  
  };

  const handleFilterByEnv = (event) => {
    const env = event.target.value;
    if (env === 'All'){
      setFilteredSubscriptions(null);
      setSubscriptions(subscriptions);
    }else{
      const filteredData = subscriptions.filter((row) => row.env === env);
      setFilteredSubscriptions(filteredData);
    }
  };
 

    return(
      <div>
          <div >
            <AddSub addNewRow={addNewRow}> </AddSub>
          </div> 
          <div className="block">
            <Filters onFilterST={handleFilterByStatus} onFilterS={handleFilterBySaasService} onFilterE={handleFilterByEnv}> </Filters>
          </div>
          <div className="block">
            <DataTable columns={columns} data={filteredSubscriptions || subscriptions} pagination highlightOnHover> </DataTable>
          </div>
      </div> 
    )
}

export default Subscriptions;
