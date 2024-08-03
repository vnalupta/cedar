import styles from "./list-header.module.scss";

const ListHeader: React.FC<{
    active: boolean;
    bullet: string;
    title: string;
    showEdit?: boolean;
    onEditClick?: () => void;
}> = ({ active, bullet, title, showEdit, onEditClick }) => {
    return (
        <div className={`${styles.container} ${active ? `` : styles.disabled}`}>
            <div style={{ display: "flex" }}>
                <span className={styles.circle}>{bullet}</span>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <div>
                {!active && showEdit && (
                    <a
                        href="javascript:void(0)"
                        className={styles.edit}
                        onClick={onEditClick}
                        aria-label="Edit your payment"
                    >
                        Edit
                    </a>
                )}
            </div>
        </div>
    );
};

export default ListHeader;
