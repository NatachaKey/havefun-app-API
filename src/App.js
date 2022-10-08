
import { useEffect, useState } from 'react';
import './App.css';

function App() {

const [activity, setActivity] = useState(''); 


useEffect(()=>{
  getActivity()
}, [])

const getActivity = async() => {
  const response= await fetch('http://www.boredapi.com/api/activity/')
  const data = await response.json();
  setActivity(data);
}


  return (
    <div className="App">
     <h3 >{activity.activity}</h3>
     <h5>Activity type: {activity.type}</h5>
     <h6>Participants: {activity.participants}</h6>
  
     <button id="btn" className="box before" onClick={()=>getActivity()}>Find an activity</button>
    </div>
  );
}

export default App;
