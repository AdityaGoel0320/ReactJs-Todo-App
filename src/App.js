import { useEffect, useState } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


  // let fnc = () => {
  //   let x = document.getElementById("id")
  //   // x.style.display = "inline";


  //   if(x.classList.contains("class")) {
  //       x.classList.remove("class");
  //   }
  //   else {
  //       x.classList.add("class");
  //   }
  // }
  return (
    <>
      {/* <button className='z' onClick={fnc}>About this Project</button>
      <div id='id' className="class">

        <About />
      </div> */}
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption style={{ "margin": "10px" }} >Welcome to your All in one Task Manager✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={onchange}
              style = {{"color" : "black"}}
            />
            {toggleBtn ? (
              <i className="far fa-edit add-btn" onClick={addBtn}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addBtn}></i>
            )}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {items.map((element, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{element.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => updatefnc(element.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deletefnc(element.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>





          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => deletefnc()}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
