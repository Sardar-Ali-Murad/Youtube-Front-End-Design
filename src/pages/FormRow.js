
const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label dark'>
          {labelText || name}
        </label>
        <input
          style={{fontSize:"24px"}}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input light'
        //   style={{width:"40%"}}
        />
      </div>
    )
  }
  
  export default FormRow
  