import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Models', path: '/models' },
        { name: 'Build Yours', path: '/models' },
        { name: 'Shopping', path: '/models' },
        { name: 'Owners', path: '/' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-bmw-dark/95 backdrop-blur-xl shadow-lg'
                        : 'bg-gradient-to-b from-black/50 to-transparent'
                    }`}
            >
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="relative z-10">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3"
                            >
                                {/* BMW-style Logo */}
                                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                        <div className="bg-bmw-blue"></div>
                                        <div className="bg-white"></div>
                                        <div className="bg-white"></div>
                                        <div className="bg-bmw-blue"></div>
                                    </div>
                                </div>
                                <span className="text-white font-bold text-xl tracking-wider hidden sm:block">BMW</span>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-5 py-2 text-white text-sm font-medium uppercase tracking-wider group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-bmw-blue"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '60%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-6">
                            <Link
                                to="/models"
                                className="px-6 py-2.5 bg-bmw-blue text-white text-sm font-semibold uppercase tracking-wider hover:bg-bmw-blue-light transition-colors duration-300"
                            >
                                Test Drive
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative z-10 p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 z-40 bg-bmw-dark lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-white text-2xl font-medium uppercase tracking-wider hover:text-bmw-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    to="/models"
                                    className="mt-8 px-8 py-4 bg-bmw-blue text-white text-lg font-semibold uppercase tracking-wider"
                                >
                                    Test Drive
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
