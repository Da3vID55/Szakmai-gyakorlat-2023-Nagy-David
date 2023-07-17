interface CountryItemProps {
  name: string;
  pop: number;
  capital: string;
  region: string;
  flag: string;

  OnSelectItem: (item:string) => void;
}

function regionSwitch(reg: string) {
  switch (reg) {
    case "Balkan":
      return "list-group-item balkan";
    case "Eastern":
      return "list-group-item eastern";
    case "Western":
      return "list-group-item western";
    case "Northern":
      return "list-group-item northern";
    case "Southern":
      return "list-group-item southern";
    case "Central":
      return "list-group-item central";
    default:
      return "list-group-item";
  }
}

function CountryItem({ name, pop, capital, region, flag, OnSelectItem }: CountryItemProps) {
  
  return (
    <>
      <h4>{name.replace(/-/g," ") + "  "}<img src={flag} width="20" height="12"></img></h4>
      <ul className="list-group countryItem" onClick={() => OnSelectItem(name)}>
        <li className={regionSwitch(region)}>
          <div>
            <img src="\src\assets\imgaes\pop.png" width="25" height="20"></img>
          </div>
          <div>
            {pop > 1000000 ? pop / 1000000 + " mil" : pop / 1000 + " k"}
          </div>
        </li>
        <li className={regionSwitch(region)}>
          <div>
            <img
              src="\src\assets\imgaes\capitol.png"
              width="25"
              height="20"
            ></img>
          </div>
          <div>{capital}</div>
        </li>
        <li className={regionSwitch(region)}>
          <div>
            <img
              src="\src\assets\imgaes\region.png"
              width="30"
              height="30"
            ></img>
          </div>
          <div>
            {region} {region !== "Balkan" && "Europe"}
          </div>
        </li>
      </ul>
    </>
  );
}

export default CountryItem;
