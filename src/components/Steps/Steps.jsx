import styles from './Steps.module.scss'
import Item from "@/components/Steps/Item/Item";
import data from "@/components/Steps/data";
import cn from "classnames";

const Steps = () => {
	return (
		<div className={styles.steps}>
			<div className={styles.background}>
				<img className={styles.lines} src="/img/about-us/lines.png" alt=""/>
			</div>
			<div className={cn('container', styles.container)}>
				<div className={styles.heading}>
					<h3 className={styles.title}>Этапы работы</h3>
					<p className={styles.desc}>
						Результат нашей работы — это продукт, сделанный в рамках ожиданий заказчика.
					</p>
					<div className={styles.line}></div>
				</div>
				<div className={styles.list}>
						{data.map((row, index) => (
							<div className={styles.row} key={index}>
								{row.map((item, index) => (
									<Item number={item.number} title={item.title} text={item.text} key={index} />
								))}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Steps;