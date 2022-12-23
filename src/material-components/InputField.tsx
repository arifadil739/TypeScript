import React from 'react'
import PropTypes from 'prop-types'
import {FormControl ,Input,  InputLabel } from '@mui/material'
import { styled } from '@mui/system'

const FormControlForm = styled(FormControl)({
  marginBottom:'20px'
})
const InputField = (props) => {
    const {label,name,value,handleChange} = props
  return   (<>    
     <FormControlForm variant="standard">
        <InputLabel>{label}</InputLabel>
        <Input onChange={handleChange}  name={name} value={value} placeholder={`Enter ${label}`}  />
      </FormControlForm>
      
  
  </>)
}



Input.propTypes = {
  label: PropTypes.string,
    name:PropTypes.string,
    value:PropTypes.string,
    handleChange:PropTypes.func
}
export default InputField