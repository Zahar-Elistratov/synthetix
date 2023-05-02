import styles from './Footer.module.scss'
import cn from "classnames";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.container)}>
				<div className={styles.contacts}>
					<a className={styles.link} href="">+7 (999) 999 99 99</a>
					<a className={styles.link} href="">synthetix.std@gmail.com</a>
				</div>
				<div className={styles.social}>
					<a className={styles.link} href="">Instagram</a>
					<a className={styles.link} href="">Twitter</a>
					<a className={styles.link} href="">LinkedIn</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;