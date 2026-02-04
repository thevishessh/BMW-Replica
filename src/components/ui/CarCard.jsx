import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CarCard = ({ car, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <Link to={`/models/${car.id}`} className="block">
                <div className="relative overflow-hidden bg-bmw-gray-900 rounded-lg">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <motion.img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Category Tag */}
                        <span className="absolute top-4 left-4 px-3 py-1 bg-bmw-blue/90 text-white text-xs font-semibold uppercase tracking-wider rounded">
                            {car.category}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                            <p className="text-bmw-gray-400 text-sm font-medium uppercase tracking-wider mb-1">
                                {car.tagline}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {car.name}
                            </h3>
                            <p className="text-bmw-gray-300 text-sm mb-4">
                                Starting at {car.startingPrice}
                            </p>

                            {/* CTA - Hidden until hover */}
                            <div className="flex items-center gap-2 text-bmw-blue font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default CarCard;
