import "./App.css";
import React from "react";
import Inputbox from "./Components/Inputbox";
import Addedcontent from "./Components/Addedcontent";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        // {
        //     name: "My Todos Kist 1",
        //     status: false,
        // },
        // {
        //     name: "My Todos Kist 2",
        //     status: false,
        // },
        // {
        //     name: "My Todos Kist 3",
        //     status: false,
        // },
    ]);
    const [saveText, setSaveText] = useState("");
    function addNewTodo(data) {
        console.log(data, "data added");
        // console.log(allTodos);
        const newTodo = {
            name: data,
            status: false,
        };
        const allTodos = [newTodo, ...todos];
        // console.log(newTodo);
        setTodos(allTodos);
    }

    function onDeletePress(delElmIndex) {
        const allTodos = [...todos];
        allTodos.splice(delElmIndex, 1);
        setTodos(allTodos);
    }

    function completeTodo(elemIndex) {
        const allTodos = JSON.parse(JSON.stringify(todos));
        allTodos[elemIndex].status = !allTodos[elemIndex].status;
        console.log(allTodos);
        setTodos(allTodos);
    }

    function EditTodo(editElm) {
        console.log(editElm, "save edit element");
        // console.log(saveText,"saveText");
        setSaveText(editElm)
    }

    return (
        <>
            <div className="App">
                <h1 className="appTitle">To-Do-App</h1>
                <Inputbox onSubmitClick={addNewTodo} />
                {todos.map((todoItem, index) => (
                    <Addedcontent
                        key={index}
                        todoItem={todoItem}
                        onDeleatePress={onDeletePress}
                        onDeleteIndex={index}
                        completeTodo={completeTodo}
                        EditTodo={EditTodo}
                    />
                ))}
                {todos.length == 0 && (
                    <div className="noTodoTitle">Please Add New Todo</div>
                )}
            </div>
        </>
    );
}
export default App;
