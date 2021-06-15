// const GrocList = (props) => (

// )
import Groc from './Groc';

const GrocList = ({groclist, name, completeUpdate, deleteGroc }) => {
  //logic
  return (
    <>
      <h1>{name}</h1>
      <ul>
        {
          groclist.map( t => 
            //below is same as saying Groc title={t.title} id={t.id} complete={t.complete}/>
            <Groc 
            {...t} 
            completeUpdate={completeUpdate}
            deleteGroc={deleteGroc}/>
            )
        }
      </ul>
    </>
  )
}

export default GrocList;