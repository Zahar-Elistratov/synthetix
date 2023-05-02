import Head from 'next/head'

import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Trigger from "@/components/Trigger/Trigger";
import AboutUs from "@/components/AboutUs/AboutUs";
import Steps from "@/components/Steps/Steps";
import Prices from "@/components/Prices/Prices";
import Order from "@/components/Order/Order";
import Footer from "@/components/Footer/Footer";
import {useRef} from "react";

const Home = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/img/favicon.ico"/>
				<title>Synthetix</title>
			</Head>
			<Menu/>
			<Header/>
			<Trigger type='first'>
				Cutting-edge landing in <span>1 month</span>
			</Trigger>
			<AboutUs/>
			<Steps/>
			<Prices />
			<Trigger type='second'>
				We create a product based <span>on strategies, creativity and technology</span>
			</Trigger>
			<Order />
		</>
	)
}

export default Home;