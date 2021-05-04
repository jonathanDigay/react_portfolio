import React, { useState} from "react";

export default function Todolist() {
  const [state, setState] = useState({
    todo: "",
    todolist: [],
  });
  const { todo, todolist } = state;

  // take the value of input
  const onchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // create todo
  const create = (e) => {
    e.preventDefault();
    const inputvalue = todolist;
    inputvalue.push(todo);
    setState({ ...state, todo: "", todolist: inputvalue });
  };

  // delete todo
  const deletepending = (index) => {
    const inputvalue = todolist;
    inputvalue.splice(index, 1);
    setState({ ...state, todo: "", todolist: inputvalue });
  };

  // edit

  const [isupdate, setIsupdate] = useState(false);

  const [edit, setEdit] = useState({
    updateedit: "",
    updateindex: "",
  });
  const { updateedit, updateindex } = edit;

  const handleOnClickEdit = (value, index) => {
    setIsupdate(true);
    setEdit({ ...edit, updateedit: value, updateindex: index });
  };

  const onchangeedit = (el) => {
    const { name, value } = el.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleOnClickCancel = () => {
    setIsupdate(false);
  };

  const handleOnUpdate = (index) => {
    const list = todolist;
    list[index] = updateedit;

    setState({ ...state, todolist: list });
    setIsupdate(false);
  };

  //  complete
  const [isComplete, setisComplete] = useState({
    todoComplete: [],
  });

  const {todoComplete } = isComplete;
  const handleOnClickComplete = (value, index) => {
    const completed = todoComplete;
    completed.push(value);
    setisComplete({ ...isComplete, todoComplete: completed });

    const inputvalue = todolist;
    inputvalue.splice(index, 1);
    setState({ ...state, todo: "", todolist: inputvalue });
  };

  const deleteComplete = (index) => {
    const completed = todoComplete;
    completed.splice(index, 1);
    setisComplete({ ...isComplete,  todoComplete: completed });
  };

  // toogle completed
  const [show, setshow] = useState(false);
  const showCompleted = () => {
    show===false?
    setshow(true)
    :setshow(false)
  };


  return (
    <div>
      {/* todolist wrapper starts */}
      <div className="todolist_wrapper">
        <h4>Project #1:todolist</h4>
        <div className="todolist">
          <div className="todo_form">
            <input
              type="text"
              placeholder="Type todo.."
              value={todo}
              name="todo"
              onChange={onchange}
              required
              htmlFor="create"
            />
            <br />
            <div className="button" id="create" onClick={create}>
              Add
            </div>
          </div>

          {/* Pending todos starts */}
          <div className="todos">
            <h3>
              Pending Todos <div className="pending_count"></div>
            </h3>
            {todolist.length ? (
              todolist.map((value, index) => {
                return (
                  <div className="todo_items" key={index}>
                    <div className="todo_item">{value}</div>
                    <div className="todo_action">
                      <button>
                        <i
                          className="fas fa-trash"
                          onClick={() => deletepending(index)}
                        ></i>{" "}
                      </button>
                      <button>
                        <i
                          className="fas fa-edit"
                          onClick={() => handleOnClickEdit(value, index)}
                        ></i>{" "}
                      </button>
                      <button>
                        <i
                          className="fas fa-check"
                          onClick={() => handleOnClickComplete(value, index)}
                        ></i>{" "}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <span>No records Pound...</span>
            )}
          </div>

          {/* update modal start */}

          {isupdate === true ? (
            <div className="update_modal">
              <div className="update_form">
                <input
                  type="text"
                  name="updateedit"
                  value={updateedit}
                  onChange={onchangeedit}
                />
                <div className="update_action">
                  <button onClick={handleOnClickCancel}>cancel</button>
                  <button onClick={() => handleOnUpdate(updateindex)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* update modal ends */}

          {/* Pending todos ends */}
          {/* todocomplete starts */}
          <div className="todo_complete">
            <div className="complete_nav">
              <i className="fas fa-check" onClick={showCompleted}></i>
              <div className="complete_count">{ todoComplete.length}</div>
              <div className="comlete_tooltip">Completed</div>
              <i className="fas fa-angle-down"></i>
            </div>
        

            {show ? (
       
              <div className="complete_wrapper">
               <h2>Complete List:</h2>
                {todoComplete.length ? (
                  todoComplete.map((value, index) => {
                    return (
                      <div className="complete_todo">
                        <div className="complete">{value}</div>
                        <i
                          className="fas fa-trash"
                          onClick={() => deleteComplete(index)}
                        ></i>
                      </div>
                    );
                  })
                ) : (
                  <div className="no_record">No records Pounds...</div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* todocomplete ends */}
        </div>
      </div>

      {/* todolist wrapper ends */}
    </div>
  );
}
