import { Button } from "@material-ui/core"

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SubmitButton: React.FC<Props> = (props) => {
  return (
    <Button variant="contained" color="primary" size="large" onClick={props.onClick}>Get Prediction</Button>
  )
}

export default SubmitButton