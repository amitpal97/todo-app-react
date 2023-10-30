import React, { useState } from "react";
import "./Addedcontent.css";

function Addedcontent({
    todoItem,
    onDeleatePress,
    onDeleteIndex,
    completeTodo,
    EditTodo,
}) {
    console.log(todoItem);

    const [editText, setEditText] = useState("");
    const [editTrueText, setEditTrueText] = useState(false);

    function onDeleteClick() {
        console.log("delierttr");
        onDeleatePress(onDeleteIndex);
    }

    function onCompleteStatus() {
        completeTodo(onDeleteIndex);
        console.log("onCompleatePress");
    }

    function onEditClick(elm) {
        console.log(elm);
        setEditText(todoItem.name);
        setEditTrueText(true);
    }

    // debugger
    function onSaveClick() {
        // console.log(elm,"saveElm");
        // todoItem.name = editText;
        console.log(editText, "editText");
        EditTodo(editText);
        setEditTrueText(false);
    }

    return (
        <>
            <div className="AddedContentContainer">
                {editTrueText ? (
                    <input
                        className="todoItems"
                        value={editText}
                        autoFocus={true}
                        onChange={(e) => setEditText(e.target.value)}
                        type="text"
                    />
                ) : (
                    <div
                        onClick={onCompleteStatus}
                        className={`todoItems ${
                            todoItem.status ? "statusOk" : "notOk"
                        }`}
                    >
                        {editText ? editText : todoItem.name}
                        {/* {todoItem.name} */}
                    </div>
                )}

                <div className="btnContainer">
                    {editTrueText ? (
                        <button className="editBtn" onClick={onSaveClick}>
                            Save
                        </button>
                    ) : (
                        <button className="editBtn" onClick={onEditClick}>
                            Edit
                        </button>
                    )}

                    <button className="removeItemBtn" onClick={onDeleteClick}>
                        X
                    </button>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Addedcontent;
