import React from 'react';
import Layout from '../layout/layout';
import Welcome from '../components/homePage/welcome';
import ScdSection from '../components/homePage/scdSection';
import ThirdSection from '../components/homePage/thirdSection';
import Footer from '../components/homePage/footer';
const HomePage = () => (
	<Layout>
		<Welcome/>
		<ScdSection />
		<ThirdSection />
		<Footer />
	</Layout>
);

export default HomePage;
