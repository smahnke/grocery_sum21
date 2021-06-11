// const GrocList = (props) => (

// )
const GrocList = ({groclist, name }) => {
  //logic
  return (
    <>
      <h1>{name}</h1>
      <ul>
        {
          groclist.map( t => 
            <li>
              {t.title}
            </li>
            )
        }
      </ul>
    </>
  )
}

export default GrocList;