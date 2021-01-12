import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core"
import React from "react"

interface Props {
  label: string
  items: object
  value: any
  onChange: (event: React.ChangeEvent<{name?: string; value: unknown;}>, child: React.ReactNode) => void
}

const KeySelector: React.FC<Props> = (props) => {
  const items = Object.keys(props.items).sort().map(item => (
    <MenuItem value={props.items[item]} key={props.items[item]}>{item}</MenuItem>
  ))

  return (
    <FormControl variant="filled">
      <InputLabel>{props.label}</InputLabel>
      <Select onChange={props.onChange} value={props.value}>
        {items}
      </Select>
    </FormControl>
  )
}

export default KeySelector