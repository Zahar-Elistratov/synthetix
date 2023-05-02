import {motion} from "framer-motion"
import cn from 'classnames'

import Link from "next/link"

import styles from './Header.module.scss'

const Header = () => {
	const linearGradient = {
		initial: {
			x1: '47.5',
			y1: '-3.04252e-05',
			x2: '350.5',
			y2: '283',
		},
		animate: {
			x1: '1342',
			y1: '656',
			x2: '1029.5',
			y2: '272.5',
		}
	}

	const radialGradient = {
		initial: {
			gradientTransform: 'translate(1342 656) scale(534 534)'
		},
		animate: {
			gradientTransform: 'translate(0 0) scale(534 534)'
		}
	}

	return (
		<motion.header className={styles.header} initial='initial' whileInView='animate'>
			<div className={styles.background}>
				<img className={styles.gradient} src="/img/header/gradient.png" alt=""/>
				<img className={styles.lines} src="/img/header/lines.png" alt=""/>
				<img className={styles.vector} src="/img/header/vector.png" alt=""/>
			</div>
			<div className={cn('container', styles.container)}>
				<div className={styles.offer}>
					<h4 className={styles.subtitle}>Synthetix</h4>
					<h1 className={styles.title}>New-era design studio</h1>
					<svg className={styles.border} viewBox="0 0 1342 656" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1341.5 655.432L0.5 655.5V69.1555L47.7628 0.5H1341.5V655.432Z"
									stroke="url(#paint0_linear_1121_7446)" strokeOpacity="0.43"/>
						<path d="M1341.5 655.432L0.5 655.5V69.1555L47.7628 0.5H1341.5V655.432Z"
									stroke="url(#paint1_radial_1121_7446)"/>
						<defs>
							<motion.linearGradient id="paint0_linear_1121_7446" x1="47.5" y1="-3.04252e-05" x2="350.5" y2="283"
																		 gradientUnits="userSpaceOnUse"
																		 variants={linearGradient}
																		 transition={{
																			 duration: 3,
																		 }}
							>
								<stop stopColor="white"/>
								<stop offset="1" stopColor="white" stopOpacity="0"/>
							</motion.linearGradient>
							<motion.radialGradient id="paint1_radial_1121_7446" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
																		 variants={radialGradient}
																		 transition={{
																			 duration: 3,
																		 }}
							>
								<stop stopColor="#5D3B70"/>
								<stop offset="0.755571" stopColor="#2B1795"/>
								<stop offset="1" stopColor="#2B1795" stopOpacity="0"/>
							</motion.radialGradient>
						</defs>
					</svg>
				</div>
				<Link className={styles.link} href=''>написать нам</Link>
			</div>
		</motion.header>
	);
};

export default Header;