import {motion, AnimatePresence} from "framer-motion";
import cn from "classnames";

import styles from './Order.module.scss';
import Footer from "@/components/Footer/Footer";
import {useState} from "react";

const Order = () => {
	const [isHovered, setHovered] = useState(false)

	const formAnimation = {
		hidden: {opacity: 0},
		visible: {opacity: 1}
	}

	return (
		<div className={styles.order} id='order'>
			<div className={cn('container', styles.container)}>
				<h3 className={styles.title}>Оставьте заявку, чтобы стать нашим клиентом</h3>
				<div className={styles.wrapper}>
					<motion.form className={styles.form} initial='hidden' whileInView='visible' variants={formAnimation}
											 transition={{duration: 1}}>
						<div className={styles.text}>
							<span><input className={styles.field} type="text" name='name' placeholder='ваше имя'/></span>.<br/>
							Нам нужно сделать:
							<span><input className={styles.field} type="text" name='name' placeholder='опишите заявку'/></span>,<br/>
							<span className={styles.delete}>и чтобы всё было в лучшем виде.<br/></span>
							вот почта <span><input className={styles.field} type="email" name='email'
																		 placeholder='email'/></span><br/>
							и телефон <span><input className={styles.field} type="tel" name='tel'
																		 placeholder='+7 777 777 77 77'/></span>
						</div>
						<div className={styles.bottom}>
							<label className={styles.policy}>
								<input type="checkbox"/>
								<span>
								я даю согласие<br/>на обработку персональных данных
							</span>
							</label>
							<motion.button className={styles.button}
														 onHoverStart={() => setHovered(true)}
														 onHoverEnd={() => setHovered(false)}
							>
								<div className={styles.left}></div>
								<span>
									ОТПРАВИТЬ
									<AnimatePresence>
										{isHovered && (
											<motion.span
												initial={{opacity: 0}}
												animate={{opacity: 1}}
												exit={{opacity: 0}}
											> →</motion.span>
										)}
									</AnimatePresence>
								</span>
								<div className={styles.right}></div>
							</motion.button>
						</div>
					</motion.form>
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default Order;