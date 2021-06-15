const Groc = ({ id, title, price, complete, completeUpdate, deleteGroc }) => {
  return (
    <>
    <li style={complete ? {...styles.complete} : {} }
      onClick={ () => completeUpdate(id)}  
    >
      { title } ${price}
    </li>
    <button onClick={() => deleteGroc(id)}>Delete</button>
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