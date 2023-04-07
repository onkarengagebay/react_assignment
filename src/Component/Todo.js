import React, { useState } from "react";

const Todo = (props) => {
  const data = {
    userInput: "",
    isChecked: false,
  };
  let [state, setState] = useState(data);

  let enterKeyHandle = (e) => {
    if (e.keyCode === 13) {
      props.addList(state);
      setState(data);
    }
  };

  let childData = () => {
    props.addList(state);

    setState(data);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className="text-dark text-center">Welcome to TODO APP</h2>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div class="input-group mb-3">
              {/* <form> */}
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="What needs to be done?"
                onChange={(e) =>
                  setState({ ...state, userInput: e.target.value })
                }
                value={state.userInput}
                onKeyDown={enterKeyHandle}
              />
              <button
                type="submit"
                className="btn btn-success btn-lg"
                onClick={childData}
              >
                Add Todo
              </button>
              {/* </form> */}
            </div>
            {props.list.length > 0 ? (
              <>
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  checked={props.btnHide().length === props.list.length}
                  aria-label="Checkbox for following text input"
                  onChange={(e) => props.allChecked(e.target.checked)}
                />
                <span>Mark all as complete</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            {props.list.length > 0 ? (
              <button className="btn btn-danger mb-4" onClick={props.deleteAll}>
                Delete All
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
