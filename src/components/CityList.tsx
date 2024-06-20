import { CityItem } from "./CItyItem";
import styles from "./CityList.module.css"
import { Message } from "./Message";
import { Spinner } from "./Spinner";

interface CityListProps {
    cities: any;
    isLoading: boolean;
}

export const CityList = ({ cities, isLoading }: CityListProps) => {

    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />
    return (
        <ul className={styles.cityList}>
            {cities.map(city => <CityItem city={city} key={city.id} />)}
        </ul>
    )
}
