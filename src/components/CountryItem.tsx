import styles from "./CountryItem.module.css";
interface CountryProps {
  country: any;
}

export const CountryItem = ({ country }: CountryProps) => {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  )
};
