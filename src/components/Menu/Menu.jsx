import cn from 'classnames'

import Link from "next/link";
import Image from "next/image";


import styles from 'src/components/Menu/Menu.module.scss'

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<div className={cn('container', styles.container)}>
				<Link className={styles.logo} href="/">
					<Image className={styles.img} src='/img/icons/logo.png' alt='Logo' height={98} width={86} />
				</Link>
			</div>
		</nav>
	);
};

export default Menu;