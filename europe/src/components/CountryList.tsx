import CountryItem from "./CountryItem";

interface CountryListProps {
  countries: {
    name: string;
    population: number;
    capital: string;
    region: string;
  }[];
  searchName: string;
}

function CountryList({ countries, searchName }: CountryListProps) {
  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-3">
          {countries.map(
            (country) =>
              country.name.includes(searchName) && (
                <div className="col" key={crypto.randomUUID()}>
                  <CountryItem
                    name={country.name}
                    pop={country.population}
                    capital={country.capital}
                    region={country.region}
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
