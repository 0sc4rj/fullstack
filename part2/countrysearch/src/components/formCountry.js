
const FormCountry = ({onFilterChange}) => {
    const handleInputChange = (event) => {
        onFilterChange(event.target.value)
    }
    
    return(
    <>
        <form action="">
            Find countries
            <input type="text" onChange={handleInputChange}/>
        </form>
    </>
    )
}
export default FormCountry