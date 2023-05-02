import {motion, AnimatePresence, useScroll} from "framer-motion";
import {useRef, useState} from "react";

import styles from './Item.module.scss'
import {useEffect} from "react";

const Item = ({number = '', title = '', text = ''}) => {
	const [isActive, setActive] = useState(false)
	const ref = useRef(null)

	const lineAnimation = {
		rest: {transition: {duration: 0.3}, x: '0px'},
		hover: {transition: {duration: 0.3}, x: '515%'}
	}

	const textAnimation = {
		rest: {transition: {duration: 0.3}, height: '0px', margin: '0 0 0 0', opacity: 0},
		hover: {transition: {duration: 0.3}, height: 'auto', margin: '44px 0 0 0', opacity: 1}
	}

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ['start center', 'end center'],
	})

	useEffect(() => {
		if (window.innerWidth < 1024) {
			scrollYProgress.onChange(() => {
				if (scrollYProgress?.current > 0) {
					setActive(true)
				} else if (scrollYProgress?.current === 0) {
					setActive(false)
				}
			})
		}
	}, [])

	return (
		<motion.div className={styles.item} ref={ref}
								onHoverStart={() => setActive(true)}
								onHoverEnd={() => setActive(false)}
		>
			<div className={styles.inner}>
				<div className={styles.number}>
					<motion.div className={styles.line}
											initial='rest'
											animate={isActive ? 'hover' : 'rest'}
											exit='rest'
											variants={lineAnimation}
					/>
					<AnimatePresence>
						{
							isActive && (
								<motion.span
									transition={{
										duration: 0.3
									}}
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									exit={{opacity: 0}}
								>
									{number}
								</motion.span>
							)
						}
					</AnimatePresence>
				</div>
				<div className={styles.offer}>
					<h4 className={styles.title}>{title}</h4>
					<AnimatePresence>
						{
							isActive && (
								<motion.p className={styles.text}
													initial='rest'
													animate='hover'
													exit='rest'
													variants={textAnimation}
								>
									{text}
								</motion.p>
							)
						}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	)
		;
};

export default Item;