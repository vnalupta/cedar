import Link from "next/link";
import Button from "./button";
import styles from "./sheet.module.scss";

const Sheet: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="box">
        <div className={styles.flexrow}>
            <p className="label">Total Due:</p>
            <p className="copy--large" data-testid="home-total">$600</p>
        </div>
        <Link data-testid="home-cta" href="/pay">
          <Button buttonType="button">Pay Total</Button>
        </Link>
      </div>
    </section>
  );
};

export default Sheet;
