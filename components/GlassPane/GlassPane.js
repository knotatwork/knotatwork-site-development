import styles from "./GlassPane.module.css";

export default function GlassPane(props) {
  const { children, className } = props;
  return <div className={`${className} ${styles.glassPaneContainer} `}>{children}</div>;
}
