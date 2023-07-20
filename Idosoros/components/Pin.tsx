import {Point} from "../Data.tsx"
import PinData from "./PinData.tsx"

interface PinProps
{
    id:string
    point:Point
    currDate:Date
}

const Pin = ({id,point,currDate}:PinProps) => {
  return (
    <>
        <div style={{left: point.pos.X + "%", top: point.pos.Y + "%"}} className="pin container text-center col-1">
            <PinData id={id} point={point} currDate={currDate}></PinData>
            <img src="src\assets\pin.png" alt={id} height="50" className="pinImage"></img>
        </div>
    </>
  )
}

export default Pin