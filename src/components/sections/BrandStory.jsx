import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Gauge } from 'lucide-react';
import Button from '../ui/Button';

const BrandStory = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const features = [
        {
            icon: Gauge,
            title: 'Performance',
            description: 'Engineered for those who demand excellence in every drive.',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'Leading the future with cutting-edge electric technology.',
        },
        {
            icon: Shield,
            title: 'Luxury',
            description: 'Uncompromising quality and refined craftsmanship.',
        },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-bmw-gray-900">
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left - Image */}
                <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop"
                            alt="BMW craftsmanship"
                            className="w-full h-[120%] object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bmw-gray-900 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bmw-gray-900 to-transparent lg:hidden" />
                </div>

                {/* Right - Content */}
                <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <span className="text-bmw-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                            The Ultimate Driving Machine
                        </span>
                        <h2 className="text-display text-white mb-6">
                            Sheer Driving Pleasure
                        </h2>
                        <p className="text-bmw-gray-400 text-lg leading-relaxed mb-10">
                            For over a century, BMW has represented the pinnacle of automotive excellence.
                            Every vehicle we create is a testament to our unwavering commitment to innovation,
                            performance, and the pure joy of driving.
                        </p>

                        {/* Features */}
                        <div className="space-y-8 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-bmw-blue/10 flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-bmw-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-bmw-gray-400 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/models">
                            <Button variant="primary" icon>
                                Explore Our Legacy
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-bmw-dark py-20">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            { value: '100+', label: 'Years of Excellence' },
                            { value: '2M+', label: 'Vehicles Sold Yearly' },
                            { value: '140+', label: 'Countries Worldwide' },
                            { value: '#1', label: 'Premium Brand' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-bmw-blue mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-bmw-gray-400 text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
