import React from "react";


const PersonForm = (props) =>
    <>
        <form onSubmit={props.addPerson}>
            <div>
                Name: <input value={props.newName} onChange={props.handleName} />
            </div>
            <div>
                Number: <input value={props.newNumber} onChange={props.handleNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>
    

export default PersonForm