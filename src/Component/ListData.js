import React from "react";
import "../App.css";

const ListData = (props) => {
  //  console.log(props.item.isChecked, "props.item.isChecked");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group mb-1">
              <li className="list-group-item">
                {/* Checkbox */}
                <div>
                  <input
                    className="form-check-input mx-2 mt-2"
                    type="checkbox"
                    checked={props.item.isChecked}
                    aria-label="Checkbox for following text input"
                    onChange={(e) =>
                      props.onChangeChecked(e.target.checked, props.index)
                    }
                  />
                  <span
                    className={
                      props.item.isChecked ? "text-decoration-line-through" : ""
                    }
                  >
                    {props.item.userInput}
                  </span>

                  <i
                    className="fa fa-trash fa-2x text-danger list-btn"
                    onClick={(e) => {
                      props.delete(props.index);
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListData;
