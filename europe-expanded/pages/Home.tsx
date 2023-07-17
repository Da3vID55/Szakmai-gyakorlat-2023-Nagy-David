import { useState } from "react";
import CountryList from "../components/CountryList";
import "bootstrap/dist/css/bootstrap.css";
import { All, Country } from "../CountryData";

export function Home()
{
    const [searchName, setSearchName] = useState("");

    const Countries: Country[] = All;

    const [activeCountries, setActiveCountries] = useState<Country[]>(Countries);

    function HandleNameSort() {
        Countries.sort((a, b) => {
        return a.name.localeCompare(b.name);
        })
        setActiveCountries([...Countries]);
    }
    function HandlePopSort() {
        Countries.sort((a, b) => {
        const res = a.population - b.population;
        return res * -1;})
        setActiveCountries([...Countries])
    }
    function HandleRegionSort() {
        Countries.sort((a, b) => {
        return a.region.localeCompare(b.region); })
        setActiveCountries([...Countries]);
    }

    return(
        <>
            <h2 className="container text-center title">European countries</h2>
      <div className="btn-toolbar justify-content-center topToolBar" role="toolbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => HandleNameSort()}
          >
            <img src="\src\assets\imgaes\sortaz.png" height="30" width="30"></img>
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => HandlePopSort()}
          >
            <img src="\src\assets\imgaes\pop.png" height="30" width="35"></img>
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => HandleRegionSort()}
          >
            <img src="\src\assets\imgaes\region.png" height="40" width="40"></img>
          </button>
        </div>
      </div>
      <CountryList
        countries={activeCountries}
        searchName={searchName}
      ></CountryList>
        </>
    )
}