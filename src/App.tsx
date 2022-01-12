import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import { CountryType } from "./types";

const URL = "https://restcountries.com/v3.1/all";

function App() {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(true);

	const getCountries = async () => {
		try {
			const { data: countries } = await axios.get<CountryType[]>(URL);
			setCountries(countries);
			setIsLoading(false);
		} catch {
			console.log("There is a problem");
		}
	};

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<div>
			<div>
				<h1>COUNTRIES</h1>
			</div>
			{isLoading ? (
				<div>
					<h1>Loading</h1>
				</div>
			) : (
				countries.map((country, index) => (
					<Country key={index} country={country} />
				))
			)}
		</div>
	);
}

export default App;
