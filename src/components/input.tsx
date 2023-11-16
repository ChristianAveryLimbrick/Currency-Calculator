const NumbericInput = ({value, onChange}) => {

    const handleChange = (e) => {
        onChange(Number(e.target.value))
    }

    return(
        <input type="number" 
        value={value || ''}
        onChange={handleChange}
        className = "px-3 py-2 border rounded-md"
        
        />
    )
}

export default NumbericInput;