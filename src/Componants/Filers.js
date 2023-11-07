import './App.css';

function Filters({onFilterST , onFilterS , onFilterE}) {
  return (
     <div className="block-content">
            <h3>Filter By</h3>
           <select className="dropdown-select" value="" onChange={onFilterST} >
             <option value="">Status</option>
             <option value="All">All</option>
             <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
             <option value="New">new</option>
          </select>

          <select  className="dropdown-select" value="" onChange={onFilterS}>
             <option value="">SaaS Service</option>
             <option value="All">All</option>
             <option value="Redis Cluster">Redis Cluster</option>
             <option value="Redis Sentinal">Redis Sentinal</option>
             <option value="Postgres">Postgres</option>
          </select>

         <select  className="dropdown-select" value="" onChange={onFilterE}>
           <option value="">Enviromint</option>
           <option value="All">All</option>
           <option value="Development">Development</option>
           <option value="Test">Test</option>
           <option value="PreProd">PreProd</option>
           <option value="prod">Production</option>
        </select>
   </div>
  )
  }

export default Filters;