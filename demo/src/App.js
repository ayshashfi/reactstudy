
import './App.css';
import { Firebase } from './Firebase/config';


function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.firestore().collection('products').add({
          name:'MI',
          price:1200
        })}}>CLICK ME</button>
    </div>
  );
}

export default App;
