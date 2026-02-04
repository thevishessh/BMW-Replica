import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

const ElectricSection = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&h=1080&fit=crop"
                    alt="BMW Electric"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bmw-dark via-bmw-dark/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12 py-32 min-h-screen flex items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-bmw-blue/20 border border-bmw-blue/30 rounded-full mb-8"
                    >
                        <Zap className="w-4 h-4 text-bmw-blue" />
                        <span className="text-bmw-blue text-sm font-semibold uppercase tracking-wider">
                            100% Electric
                        </span>
                    </motion.div>

                    <h2 className="text-display text-white mb-6">
                        The Future is Electric
                    </h2>

                    <p className="text-xl text-bmw-gray-300 mb-8 leading-relaxed">
                        Experience zero-emission driving without compromising on performance or luxury.
                        Our electric vehicles deliver instant torque, whisper-quiet rides, and the
                        exhilarating BMW driving dynamics you love.
                    </p>

                    {/* Electric Highlights */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        {[
                            { value: '300+', label: 'Mile Range' },
                            { value: '0-60', label: 'Under 4s' },
                            { value: '30min', label: 'Fast Charge' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-white mb-1">
                                    {item.value}
                                </div>
                                <div className="text-bmw-gray-400 text-xs uppercase tracking-wider">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/models">
                            <Button variant="primary" icon>
                                Explore Electric
                            </Button>
                        </Link>
                        <Link to="/models">
                            <Button variant="ghost" icon>
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ElectricSection;
