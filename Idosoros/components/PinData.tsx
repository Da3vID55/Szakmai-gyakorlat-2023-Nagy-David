import { Point } from "../Data"

interface pinDataProps
{
    id:string
    point:Point
    currDate:Date
}

const PinData = ({id,point,currDate}:pinDataProps) => {

    let data:Point

    data = {data:point.data.sort((a,b) => {
        return a.date.getTime() - b.date.getTime()
    }),
            id:point.id,
            pos:point.pos            
    }   

    const currentInd = findIndForDate(currDate)

    function findIndForDate(date:Date)
    {
        let ind = 0
        let found = false
        data.data.map((d) => {
            if (!found && d.date.getTime() > date.getTime())
            {
                found = true
                ind = data.data.findIndex(x => x === d) - 1
            }
        })
        if (!found) {ind = data.data.length-1}
        if (ind < 0) {ind = 0}
        return(ind)
    }

  return (
    <>
        <ul className='list-group pinData'>
            <li className='list-group-item'>
                {id}
            </li>
            <li className="list-group-item">
                {data.data[currentInd].date.getFullYear() + " " + 
                (data.data[currentInd].date.toLocaleString('default', {month: 'short'})) + " " + 
                (data.data[currentInd].date.getDate() >= 10 ? data.data[currentInd].date.getDate() : "0" + data.data[currentInd].date.getDate())}
            </li>
            <li className="list-group-item">
                {data.data[currentInd].value}
            </li>
        </ul>
    </>
  )
}

export default PinData