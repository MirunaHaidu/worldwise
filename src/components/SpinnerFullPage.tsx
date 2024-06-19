import { Spinner } from "./Spinner";
import styles from "./SpinnerFullPage.module.css";

export const SpinnerFullPage = () => {
	return (
		<div className={styles.spinnerFullpage}>
			<Spinner />
		</div>
	);
};
