import styles from './Card.module.scss'

const Card = ({title = '', text = ''}) => {
	return (
		<div className={styles.card}>
			<div className={styles.inner}>
				<div className={styles.line}></div>
				<div className={styles.offer}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.text}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;