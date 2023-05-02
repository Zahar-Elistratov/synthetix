import styles from './Item.module.scss';
import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";

const Item = ({title = '', text = '', price = '', time = 0}) => {
	const [isHovered, setHovered] = useState(false)

	const handleScroll = (event) => {
		event.preventDefault();

		const elem = document.getElementById('order');

		elem.scrollIntoView({
			behavior: "smooth",
		})
	};

	return (
		<div className={styles.item}>
			<Link className={styles.more} href='/'>More</Link>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
			<motion.button className={styles.price} onClick={handleScroll}
										 onHoverStart={() => setHovered(true)}
										 onHoverEnd={() => setHovered(false)}
			>
				<span>{isHovered ? 'ЗАКАЗАТЬ' : price}</span>
			</motion.button>
			<div className={styles.time}>{time} дней</div>
		</div>
	)
		;
};

export default Item;