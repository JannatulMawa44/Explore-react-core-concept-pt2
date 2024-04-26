
import './App.css'
import Friends from './Friends';
import Counter from './assets/Counter';
import Team from './assets/Team';
import Users from './assets/Users';

function App() {
 
  function handlClick(){
    alert('button click');
  }
  return (
    <>
      
      <h3>React Core Concept 2</h3>
      <button onClick={handlClick}>Click Me</button>
      
      <Friends></Friends>
     <Users></Users>
     <Team></Team>
    <Counter></Counter>
     
    </>
  )
}

export default App
