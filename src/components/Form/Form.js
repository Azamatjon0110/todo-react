import React, { useState } from "react";


const Form = (props) => {
  const [value, setValue] = useState("");

  const changeInputHandler = (evt) => {
    setValue(evt.target.value);
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    const obj = {
      id: Math.random(),
      title: value,
      isCompleted: false,
    };
    props.onGetTodo(obj);
    setValue("");
  };

  return (
    <>
      <form className=" w-50 mx-auto mb-4" onSubmit={submitFormHandler}>
        <div className="input-group">

          <input
            className="form-control"
            type="text"
            name="user_text"
            placeholder="Enter todos"
            value={value}
            onChange={changeInputHandler}
            required
            />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
            </div>
      </form>
    </>
  );
};

export default Form;
