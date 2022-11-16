import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {toggleTxt,resetTxt,selectTxt} from './store/slices/txt/txtSlice'
import {addNewMess,delMess,selectMessages} from './store/slices/messages/messagesSlice'


function App() {
const dispatch = useDispatch()
const txt = useSelector(selectTxt)
const messages = useSelector(selectMessages)

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(txt);
  if(txt){
    dispatch(addNewMess(txt))
  }
  dispatch(resetTxt())

}
  
  return (

    <div className="App">
      <div>
          {
            messages.map(el => <h2 className={el.user ? 'me' : 'you'} key={el.id}>{el.message} 
            { !el.isDeleted &&  <span onClick={()=> dispatch(delMess(el.id))} style={{color: 'blueviolet' , cursor: 'pointer'}}>X</span>} </h2>)
          }
      </div>
     <form onSubmit={handleSubmit}>
        <input value={txt}
        onChange={(e)=> dispatch(toggleTxt(e.target.value))} 
        type='text'/>
        <button>Send</button>

     </form>
    </div>
  );
}

export default App;
