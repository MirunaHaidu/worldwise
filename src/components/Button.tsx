import styles from "./Button.module.css";

interface ButtonProps {
    children: any;
    onClick: (e) => void;
    type: any;
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </div>
    )
}
