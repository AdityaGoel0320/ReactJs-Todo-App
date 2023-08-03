import { useEffect, useState } from 'react';
import './App.css';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import About from './Components/About';
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
    else if (inputData && toggleBtn == true) {
      setitems(
        items.map((x) => {
          if (x.id == id_of_edit_item) {
            return { ...x, data: inputData }
          }
          else {
            return x
          }
        })
      )
      // now matlba update complete so make normal
      setid_of_edit_item(null);
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

    let item_to_edit = items.find((x) => {
      return x.id === parameter;
    })
    setid_of_edit_item(parameter);
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

    <About/>
      <div className='heading' >

        <h1>
          Hello <img className='h1' src="./images/wavyHand.png" alt=" " />
          Welcome to your All in one Task Manager
        </h1>

        <h3>Add your Work Here 👍</h3>


        <div>
          <input type="text" value={inputData} onChange={onchange} placeholder={`${"Add Your Item"}`} />

          {
            (toggleBtn == false) ? (<button onClick={addBtn}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>) : (<button onClick={addBtn}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>)
          }

        </div>
      </div>

      <div className="list">
        {
          items.map((element, index) => {
            return (
              <div className="sub_list" key={index}>
                <div className="data">{element.data}</div>
                <button onClick={() => updatefnc(element.id)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>
                <button onClick={() => deletefnc(element.id)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
              </div>
            )
          })
        }
      </div>

      <button onClick={() => { deletefnc() }}>CheckList</button>

    </>
  );
}

export default App;
