import styles from './Prices.module.scss';
import Item from "@/components/Prices/Item/Item";

const Prices = () => {
	return (
		<div className={styles.prices}>
			<div className='container'>
				<div className={styles.heading}>
					<h3 className={styles.title}>Виды проектов</h3>
					<div className={styles.line}></div>
				</div>
				<div className={styles.list}>
					<Item title='Тариф «Light»'
								text='Для эксперта, презентации продукта и рекламы.'
								price='150,000₽'
								time='15'
					/>
					<Item title='Тариф «Medium»'
								text='Для набирающего обороты бизнеса или стартапа.'
								price='150,000₽'
								time='15'
					/>
					<Item title='Тариф «maximum»'
								text='Для успешного бизнеса, ориентированного на увеличение чека и масштабирование.'
								price='300,000₽'
								time='20'
					/>
				</div>
			</div>
		</div>
	);
};

export default Prices;