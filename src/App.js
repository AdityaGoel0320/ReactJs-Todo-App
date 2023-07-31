import { useEffect, useState } from 'react';
import './App.css';


let getLocalStorageData = () => {
  let arr = localStorage.getItem("todoListItems")
  if (arr) {
    return JSON.parse(arr);

  }
  else {
    return []
  }
}
function App() {


  // as this is for normal 
  // const [items, setitems] = useState([])

  // now for localstorage
  const [items, setitems] = useState(getLocalStorageData())

  const [inputData, setinputData] = useState()

  const [id_of_edit_item, setid_of_edit_item] = useState("")

  const [toggleBtn, settoggleBtn] = useState(false)

  let onchange = (e) => {
    setinputData(e.target.value)
  }

  let addBtn = () => {
    if (!inputData) {
      alert("enter properly")
    }

    // due to update
    else if(inputData && toggleBtn==true){
      setitems(
        items.map((x)=>{
          if(x.id==id_of_edit_item){
            return {...x , data:inputData}
          }
          else{
            return x
          }
        })
      )
      // now matlba update complete so make normal
      setid_of_edit_item(null) ; 
      setinputData("")
      settoggleBtn(false)
    }


    else {
      let newData = {
        id: new Date().getTime().toString(),
        data: inputData
      }
      setitems([...items, newData])
      setinputData("")
      console.log(items)
    }
  }


  let updatefnc = (parameter) => {

    let item_to_edit = items.find((x)=>{
      return x.id===parameter; 
    })
    setid_of_edit_item(parameter) ; 
    setinputData(item_to_edit.data)
    // matlab jab update pe click ho add wala btn update me convert ho jaye
    settoggleBtn(true)
   
  }

  let deletefnc = (parameter) => {
    if (!parameter) {
      setitems([])
    }
    else {

      let newitems = items.filter((x) => {
        return x.id !== parameter
      })
      setitems(newitems)
    }
  }



  // local storage
  useEffect(() => {
    localStorage.setItem("todoListItems", JSON.stringify(items))

  }, [items])

  return (
    <>
      <h1>Todo List</h1>
      <h3>Add your itemss</h3>


      <input type="text" value={inputData} onChange={onchange} placeholder='Enter your data' />

{
 (toggleBtn==false)? ( <button onClick={addBtn}>Add</button>) : ( <button onClick={addBtn}>update</button>)
}
     

      {
        items.map((element, index) => {
          return (
            <div className="list" key={index}>
              <div className="items1">{element.data}</div>
              <button onClick={() => updatefnc(element.id)}>edit</button>
              <button onClick={() => deletefnc(element.id)}>delete</button>
            </div>
          )
        })
      }


      <button onClick={() => { deletefnc() }}>CheckList</button>

    </>
  );
}

export default App;
