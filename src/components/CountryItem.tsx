import styles from "./CountryItem.module.css";
export const CountryItem = () => {
    return (
        <li className={styles.countryItem}>
          <span>{country.emoji}</span>
          <span>{country.country}</span>
        </li>
};
