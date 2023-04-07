//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Todo from "./Component/Todo";
import ListData from "./Component/ListData";

function App() {
  let [state, setState] = useState([]);

  let addList = (data) => {
    if (data.userInput !== "") {
      setState(() => [...state, data]);
    }
  };

  let btnHide = () => {
    return state.filter((arrayOfData) => {
      return arrayOfData.isChecked === true;
    });
  };

  let leftItems = () => {
    return state.filter((arrayOfData) => {
      return arrayOfData.isChecked === false;
    });
  };

  let selectedDelete = () => {
    // let storeedData = state;
    let selectData = state.filter((data) => {
      return data.isChecked !== true;
    });
    // storeedData.splice(index, selectData);
    setState([...selectData]);
  };

  let deleteSingleData = (key) => {
    let storedOldArrayData = [...state];
    storedOldArrayData.splice(key, 1);
    setState([...storedOldArrayData]);
  };

  let deleteAllData = (key) => {
    setState([]);
  };

  let onChangeChecked = (value, index) => {
    const tempArr = state;
    tempArr[index].isChecked = value;
    setState([...tempArr]);
  };

  let allChecked = (checkedValue) => {
    const tempArr = state;
    tempArr.map((singleData) => {
      return (singleData.isChecked = checkedValue);
    });
    setState([...tempArr]);
  };
  // console.log(leftItems, "");
  return (
    <>
      <Todo
        addList={addList}
        allChecked={allChecked}
        deleteAll={deleteAllData}
        btnHide={btnHide}
        list={state}
      />
      {state.map((listItem, i) => {
        return (
          <ListData
            key={i}
            item={listItem}
            index={i}
            delete={deleteSingleData}
            onChangeChecked={onChangeChecked}
            checkedDelete={selectedDelete}
          />
        );
      })}

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            {state.length > 0 ? (
              <div className="card shadow-lg">
                <div className="card-body bg-success text-light">
                  <span className="">{leftItems().length} items left</span>
                  <span className="btn-side">
                    {btnHide().length > 0 ? (
                      <button
                        className="btn btn-warning ml-5"
                        onClick={() => selectedDelete()}
                      >
                        Clear list item
                      </button>
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
