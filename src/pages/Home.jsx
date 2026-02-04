import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedModels from '../components/sections/FeaturedModels';
import BrandStory from '../components/sections/BrandStory';
import ElectricSection from '../components/sections/ElectricSection';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <FeaturedModels />
            <BrandStory />
            <ElectricSection />
        </main>
    );
};

export default Home;
