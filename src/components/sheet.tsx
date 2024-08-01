import Button from "./button";
import styles from "./sheet.module.scss";

const Sheet: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="box">
        <div className={styles.flexrow}>
            <p className="label">Total Due:</p>
            <p className="copy--large">$600</p>
        </div>
        <Button>Pay Bill</Button>
      </div>
    </section>
  );
};

export default Sheet;
