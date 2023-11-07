import './App.css';

function AddSub({addNewRow}) {
    return (
        <div className="block-content">
        <h1>Saas Subscriptions</h1>
        <button className="button" onClick={addNewRow}>+ New Subscriptions</button>
    </div>
    );
  }
  
  export default AddSub;