import { Link, Route, Routes } from "react-router-dom";
import Map from "../pages/Map";

interface SelectedCountryProps {
  name: string;
  pop: number;
  capital: string;
  region: string;
  info: string;
  flag: string;

  OnClick: () => void;
}

export function SelectedCountry({name,pop,capital,region,info,flag,OnClick}:SelectedCountryProps) {
  return (
    <>
      <Routes>
        <Route path="/Map" element={<Map/>}></Route>
        <Route path="/Map/:id" element={<Map/>}></Route>
      </Routes>
      <div className="container text-center selectedItem">
        <div className="row row-cols-sm-1 flex-grow-1">
          <div className="col-md-3 flex-column">
            <ul className="list-group">
              <li className="list-group-item selectedItemFlag">
                <button type="button" className="btn closeSelected btn-square d-md-none" onClick={OnClick}>&times;</button>
                <img className="countryFlagImage" src={flag} alt={name + " flag"}></img>
              </li>
              <li className="list-group-item">{pop > 1000000 ? pop / 1000000 + " mil" : pop / 1000 + " k"}</li>
              <li className="list-group-item">{capital}</li>
              <li className="list-group-item">{region}</li>
            </ul>
          </div>
          <div className="col-md-9">
            <button type="button" className="btn closeSelected btn-square d-none d-md-block" onClick={OnClick}>&times;</button>
            <br  className="btn closeSelected btn-square d-none d-md-block"/>
            <h4>{name.replace(/-/g," ")}</h4>
            <p>{info}</p>
            <Link to={"/Map/" + name}>
              <img src="src\assets\imgaes\mapIcon.png" width="50"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
/**<div className="container text-center" onClick={OnClick}>
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <div className="row">
              {name}
            </div>
            <div className="row">
              {pop}
            </div>
            <div className="row">
              {capital}
            </div>
            <div className="row">
              {region}
            </div>
          </div>
          <div className="col-sm-6">
            <p>{info}</p>
          </div>
        </div>
      </div> */