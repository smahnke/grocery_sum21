import { useState } from 'react';
import GrocForm from './GrocForm';

const Groc = ({ id, title, price, complete, completeUpdate, deleteGroc, updateGroc }) => {
  const [editing, setEditing] = useState(false)

  return (
    <>
    <li style={complete ? {...styles.complete} : {} }
      onClick={ () => completeUpdate(id)}  
    >
      { title } ${price}
    </li>
    <button onClick={() => deleteGroc(id)}>Delete</button>
    { editing ? 
      <>
      <GrocForm 
        id={id} 
        title={title} 
        price={price} 
        updateGroc={updateGroc} 
        setEditing={setEditing} />
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </>
      :
      <button onClick={() => setEditing(!editing)}>Edit</button>
    }
    </>
  )
}

const styles = {
  complete : {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Groc;