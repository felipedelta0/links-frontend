import React, { useState, useEffect } from 'react'

const FormGroup = (props) => {
  const { label, name, type, data } = props
  const [value, setValue] = useState('')

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined

    if (initialValue !== undefined)
      setValue(initialValue)

  }, [name, data])

  const handleChange = (e) => {
    if (e.target.value === value)
      return
    setValue(e.target.value)
  }

  const inputProps = {
    type, 
    name, 
    value: value || '',
    onChange: handleChange
  }

  return (
    <div className='form-group'>
      <label>{label}</label>
      <input className='form-control' {...inputProps} />
    </div>
  )

}

export default FormGroup