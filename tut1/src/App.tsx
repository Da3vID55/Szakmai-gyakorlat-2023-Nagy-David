import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App()
{
  const [buttonState,setButtonState] = useState(0)

  return <div>
      {buttonState === 1 && <Alert onClose={ () => setButtonState(0)}>Why are yuo click</Alert>}
      <Button color = 'primary' onClick = {() => setButtonState(1)}>Deez</Button>
    </div>
}

export default App;
