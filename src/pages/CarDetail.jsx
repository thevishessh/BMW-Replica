import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Gauge,
    Zap,
    Timer,
    Car,
    Settings,
    Shield,
    Check
} from 'lucide-react';
import { getCarById } from '../data/cars';
import Button from '../components/ui/Button';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const carData = getCarById(id);
        setCar(carData);
    }, [id]);

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bmw-dark">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    const specIcons = {
        engine: Car,
        power: Zap,
        acceleration: Timer,
        topSpeed: Gauge,
        transmission: Settings,
        drivetrain: Shield,
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % car.gallery.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + car.gallery.length) % car.gallery.length);
    };

    return (
        <main className="pt-20 bg-bmw-dark min-h-screen">
            {/* Back Button */}
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
                <Link
                    to="/models"
                    className="inline-flex items-center gap-2 text-bmw-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Models</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="max-w-[1800px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Main Image */}
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bmw-gray-900 mb-4">
                            <motion.img
                                key={selectedImage}
                                src={car.gallery[selectedImage]}
                                alt={car.name}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3">
                            {car.gallery.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative flex-1 aspect-[16/10] rounded-lg overflow-hidden transition-all duration-300 ${selectedImage === index
                                            ? 'ring-2 ring-bmw-blue'
                                            : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${car.name} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Car Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="inline-block px-3 py-1 bg-bmw-blue text-white text-xs font-semibold uppercase tracking-wider rounded mb-4">
                            {car.category}
                        </span>

                        <h1 className="text-display text-white mb-2">{car.name}</h1>

                        <p className="text-bmw-gray-400 text-xl mb-4">{car.tagline}</p>

                        <p className="text-3xl font-bold text-white mb-8">
                            Starting at {car.startingPrice}
                        </p>

                        <p className="text-bmw-gray-400 leading-relaxed mb-8">
                            {car.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Button variant="primary">Configure Your {car.name.split(' ').pop()}</Button>
                            <Button variant="secondary">Schedule Test Drive</Button>
                        </div>

                        {/* Features */}
                        <div className="border-t border-bmw-gray-800 pt-8">
                            <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {car.features.map((feature, index) => (
                                    <motion.li
                                        key={feature}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-3 text-bmw-gray-300"
                                    >
                                        <Check className="w-5 h-5 text-bmw-blue flex-shrink-0" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-heading text-white text-center mb-12">Technical Specifications</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {Object.entries(car.specs).map(([key, value], index) => {
                            const Icon = specIcons[key] || Settings;
                            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-bmw-gray-900 rounded-lg p-6 text-center"
                                >
                                    <Icon className="w-8 h-8 text-bmw-blue mx-auto mb-4" />
                                    <p className="text-white font-bold text-lg mb-1">{value}</p>
                                    <p className="text-bmw-gray-500 text-xs uppercase tracking-wider">{label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* CTA Banner */}
            <section className="bg-bmw-gray-900 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-heading text-white mb-4">
                            Ready to Experience the {car.name}?
                        </h2>
                        <p className="text-bmw-gray-400 text-lg mb-8">
                            Visit your nearest BMW dealer to see it in person or schedule a test drive.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary">Find a Dealer</Button>
                            <Button variant="dark">Download Brochure</Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default CarDetail;
