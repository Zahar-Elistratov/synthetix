import styles from './Trigger.module.scss'
import cn from "classnames";

const Trigger = ({type = '', children}) => {
	return (
		<div className={styles.trigger}>
			<div className={styles.background}>
				<img className={styles.lines} src="/img/trigger/lines.png" alt=""/>
				<div className={styles.unions}>
					<svg className={styles.union} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M44 0H36V36H0V44H36V80H44V44H80V36H44V0Z" fill="#252525"/>
					</svg>
					<svg className={styles.union} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M44 0H36V36H0V44H36V80H44V44H80V36H44V0Z" fill="#252525"/>
					</svg>
					<svg className={styles.union} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M44 0H36V36H0V44H36V80H44V44H80V36H44V0Z" fill="#252525"/>
					</svg>
					<svg className={styles.union} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M44 0H36V36H0V44H36V80H44V44H80V36H44V0Z" fill="#00F0FF"/>
					</svg>
				</div>
			</div>
			<div className={cn("container", styles.container)}>
				<h2 className={cn(styles.title, type === 'first' ? styles.first : styles.second)}>{children}</h2>
			</div>
		</div>
	);
};

export default Trigger;