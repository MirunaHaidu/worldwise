
import { CountryItem } from "./CountryItem";
import styles from "./CountryList.module.css"
import { Message } from "./Message";
import { Spinner } from "./Spinner";

interface CountryListProps {
    cities: any;
    isLoading: boolean;
}

export const CountryList = ({ cities, isLoading }: CountryListProps) => {

    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    const countries = []

    return (
        <ul className={styles.countryList}>
            {countries.map(country => <CountryItem country={country} key={country.id} />)}
        </ul>
    )
}
