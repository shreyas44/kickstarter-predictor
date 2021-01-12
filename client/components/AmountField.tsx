import { FormControl, InputLabel, FilledInput, InputAdornment } from '@material-ui/core'
import React from 'react'
import styles from './AmountField.module.scss'

interface Props {
  label: string
  value: any
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const AmountField: React.FC<Props> = (props) => {
  return (
    <FormControl variant="filled">
      <InputLabel>{props.label}</InputLabel>
      <FilledInput
        className="border-green-600" 
        type="number"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  )
}

export default AmountField