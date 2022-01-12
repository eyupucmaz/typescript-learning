import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
	country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
   // const {country} =props;

	return (
		<>
			<div>
				{props.country.name.common} - {props.country.capital}
			</div>
		</>
	);
};

export default Country;
