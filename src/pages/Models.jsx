import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cars, categories, getCarsByCategory } from '../data/cars';
import CarCard from '../components/ui/CarCard';
import SectionTitle from '../components/ui/SectionTitle';

const Models = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setFilteredCars(getCarsByCategory(activeCategory));
    }, [activeCategory]);

    return (
        <main className="pt-20">
            {/* Hero Banner */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=800&fit=crop"
                        alt="BMW Models"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark via-bmw-dark/60 to-transparent" />
                </div>

                <div className="relative h-full max-w-[1800px] mx-auto px-6 lg:px-12 flex items-end pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-bmw-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                            Discover
                        </span>
                        <h1 className="text-hero text-white">All Models</h1>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="section-padding bg-bmw-dark">
                <div className="max-w-[1800px] mx-auto">
                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === category
                                        ? 'bg-bmw-blue text-white'
                                        : 'bg-bmw-gray-800 text-bmw-gray-400 hover:bg-bmw-gray-700 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Results Count */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-bmw-gray-400 text-sm text-center mb-8"
                    >
                        Showing {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && ` in ${activeCategory}`}
                    </motion.p>

                    {/* Cars Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredCars.map((car, index) => (
                                <motion.div
                                    key={car.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <CarCard car={car} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-bmw-gray-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-heading text-white mb-4">
                            Not sure which model is right for you?
                        </h2>
                        <p className="text-bmw-gray-400 text-lg mb-8">
                            Our experts are ready to help you find the perfect BMW for your lifestyle.
                        </p>
                        <button className="btn-primary">
                            Contact a Specialist
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Models;
