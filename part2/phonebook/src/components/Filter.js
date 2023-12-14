import React from "react"

const Filter = (props) =>
    <>
        Filter Shown With <input value={props.searchName} onChange={props.handleSearch} />
    </>

export default Filter