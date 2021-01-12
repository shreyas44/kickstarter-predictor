import { TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import AmountField from './AmountField'
import KeySelector from './KeySelector'
import SubmitButton from './SubmitButton'

const Results: React.FC<{results: object}> = (props) => {
  if (props.results === {}) return null

  const items = Object.keys(props.results).map((item, index) => (
    <div className="flex justify-between items-center font-mono" key={index}>
      <div className="text-green-800 font-bold">{item[0].toUpperCase() + item.slice(1)}</div>
      <div className="text-lg text-green-800">{props.results[item]} <span className="text-sm opacity-75">%</span></div>
    </div>
  ))

  return (
    <div className="flex flex-col space-y-2">
      {items}
    </div>
  )
}


interface Props {
  categories: object 
  subcategories: object
  countries: object
}

const Form: React.FC<Props> = (props) => {
  const [results, setResults] = useState({})
  const [state, setState] = useState({
    backers: '',
    pledged: '',
    goal: '',
    category: '',
    subcategory: '',
    country: '',
  })

  const handleChange = (field) => {
    return (event) => {
      setState({
        ...state,
        [field]: event.target.value
      })
    }
  }

  const handleSubmit = async () => {
    const { data } = await axios.post("/get-prediction", state)
    setResults(data)
  }

  return (
    <div className="flex flex-col space-y-5 max-w-md m-auto">
      <TextField 
        label="Backers" 
        variant="filled" 
        className="border-green-600" 
        type="number" 
        value={state.backers}
        onChange={handleChange("backers")}
      />
      <AmountField 
        label="Pledged Amount" 
        value={state.pledged}
        onChange={handleChange("pledged")}
      />
      <AmountField 
        label="Goal" 
        value={state.goal}
        onChange={handleChange("goal")}
      />
      <KeySelector 
        label="Category" 
        items={props.categories} 
        value={state.category}
        onChange={handleChange("category")}
      />
      <KeySelector 
        label="Sub Category" 
        items={props.subcategories} 
        value={state.subcategory} 
        onChange={handleChange("subcategory")}
      />
      <KeySelector 
        label="Country" 
        items={props.countries} 
        value={state.country} 
        onChange={handleChange("country")}
      />
      <SubmitButton 
        onClick={handleSubmit}
      />
      <Results 
        results={results} 
      />
    </div>
  )
}

export default Form