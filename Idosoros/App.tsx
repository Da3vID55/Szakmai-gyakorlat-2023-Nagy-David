import Pin from "./components/Pin"
import {points, Point} from "./Data.tsx"
import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css"
import { useState } from "react";


function App() {

  function calculateRangeAndMin()
  {
    let min = points[0].data[0].date
    let max = new Date()


    points.map((point) => {
      point.data.map((d) => {
        if (d.date < min)
        {
          min = d.date
        }
      })
    })
    let range = max.getTime() - min.getTime()
    return {min, range}
  }

  function convertToDateFromMin(earliest:Date,value:number)
  {
    const ret = +earliest.getTime() + +value
    return(new Date(ret))
  }

  function changeDate(event:any)
  {
    setCurrVal(event.target.value);
  }

  function doesPointExist(point:Point, date:number) : boolean
  {
    let ret = false
    point.data.map((d) => {
      if (d.date.getTime() < (+date + +earliest.getTime()))
      {
        ret = true
      }
    })
    return ret
  }

  const earliest = calculateRangeAndMin().min
  const [currVal, setCurrVal] = useState(0)

  return (
    <>
      <div className="container h-100">
          {points.map((point) => 
            (doesPointExist(point,currVal)&&<Pin id={point.id} point={point} currDate={convertToDateFromMin(earliest,currVal)}></Pin>)
          )}
        <div className="row">
          <input type="range" min="0" max={calculateRangeAndMin().range} onChange={(e) => changeDate(e)}></input>
          <p>{convertToDateFromMin(earliest,currVal).toString()}</p>
        </div>
      </div>
    </>
  )
}

export default App
