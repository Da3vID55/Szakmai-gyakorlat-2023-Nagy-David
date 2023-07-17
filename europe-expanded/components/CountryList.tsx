import { useState } from "react";
import CountryItem from "./CountryItem";
import { SelectedCountry } from "./SelectedCountry";

interface CountryListProps {
  countries: {
    name: string;
    population: number;
    capital: string;
    region: string;
    info: string;
    flag: string;
  }[];
  searchName: string;
}

function CountryList({ countries, searchName }: CountryListProps) {
  const [selectedItem, setSelectedItem] = useState("");

  function selectItem(item: string) {
    setSelectedItem(item);
  }

  return (
    <>
      <div className="container text-center">
        {countries.map(
          (country) =>
            country.name === selectedItem && (
              <SelectedCountry
                name={country.name}
                pop={country.population}
                capital={country.capital}
                region={country.region}
                OnClick={() => {
                  selectItem("");
                }}
                info={country.info}
                flag={country.flag}
              ></SelectedCountry>
            )
        )}
      </div>
      <div className="container text-center">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
          {countries.map(
            (country) =>
              country.name.includes(searchName) && (
                <div className="col" key={crypto.randomUUID()}>
                  <CountryItem
                    name={country.name}
                    pop={country.population}
                    capital={country.capital}
                    region={country.region}
                    flag={country.flag}
                    OnSelectItem={(item) => {
                      selectItem(item);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  ></CountryItem>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default CountryList;
