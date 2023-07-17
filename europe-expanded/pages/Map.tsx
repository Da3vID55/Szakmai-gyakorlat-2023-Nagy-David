import "../css/map.css"

import {useParams} from 'react-router-dom'
import { All } from "../CountryData"

function Map() {

    const {id} = useParams()

    const countries = All

    function getFlag(param:string|undefined):string
    {
        let ret:string = ""
        countries.map((country) => {
            if (country.name == param)
            {
                ret = country.flag
            }
        })
        return(ret)
    }

    return (
        <>
            <div className="container text-center mapContainer">
                <div className="col">
                    <img src="src/assets/imgaes/map.png" alt="Map" className="img-fluid mapImage"></img>
                    {
                        (
                            (getFlag(id) !== "") && 
                            <div className={id?.replace(/\s/g, "")+"Pin pin"}>
                                <div className="row-cols-1">
                                    <div className="col">
                                        <img src={getFlag(id)} alt="flag" height="30" className="pinFlag"></img>
                                    </div>
                                    <div className="col">
                                        <img src="src/assets/imgaes/pin.png" alt="pin" height="30" className="pinPin"></img>
                                    </div>
                                </div>
                            </div>
                        )
                        ||
                        (
                            (getFlag(id) === "") &&
                            (countries.map((country) => (
                                <div className={country.name.replace(/\s/g, "")+"Pin pin allPins"}>
                                    <div className="row-cols-1 allPinsWrapper">
                                        <div className="col">
                                            <img src={getFlag(country.name)} alt="flag" width="50" className="pinFlag allPinsFlag"></img>
                                            <img src="src/assets/imgaes/pin.png" alt="pin" width="25" className="pinPin allPinsPin"></img>
                                        </div>
                                    </div>
                                </div>
                            )))

                        )
                    }
                </div>
            </div>
        </>
  )
}

export default Map