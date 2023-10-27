import React, { useState } from "react";
import "./Inputbox.css";
// import { useState } from "react";

function Inputbox({onSubmitClick,editElm}) {
    const [text, setText] = useState("");
    function onFromSubmit(e) {
        e.preventDefault();
        onSubmitClick(text)
        setText("")
        
    }

    return (
        <>
            <div className="InputContainer">
                <form  className="formCont" onSubmit={onFromSubmit}>
                    <input value={text} 
                        onChange={(e) => setText((e.target.value))}
                        className="inputBoxContent"
                        type="text"
                        placeholder="Add Your Task" required
                    />
                    <button className="addBtn">ADD</button>
                </form>
            </div>
        </>
    );
}

export default Inputbox;
