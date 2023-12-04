import styles from "./Button.module.css";

type buttonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: buttonProps) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}
