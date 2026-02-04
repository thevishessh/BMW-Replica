import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cars } from '../../data/cars';
import CarCard from '../ui/CarCard';
import SectionTitle from '../ui/SectionTitle';

const FeaturedModels = () => {
    const featuredCars = cars.slice(0, 4);

    return (
        <section className="section-padding bg-bmw-dark">
            <div className="max-w-[1800px] mx-auto">
                <SectionTitle
                    subtitle="Our Models"
                    title="Featured Vehicles"
                    description="Discover our range of luxury vehicles, each engineered to deliver the ultimate driving experience."
                />

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                    {featuredCars.map((car, index) => (
                        <CarCard key={car.id} car={car} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        to="/models"
                        className="inline-flex items-center gap-3 text-bmw-blue font-semibold text-sm uppercase tracking-wider group"
                    >
                        <span>View All Models</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedModels;
