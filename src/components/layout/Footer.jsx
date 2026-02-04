import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    MapPin,
    Phone,
    Mail
} from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        vehicles: [
            { name: 'All Models', path: '/models' },
            { name: 'Sedans', path: '/models?category=Sedan' },
            { name: 'SUVs', path: '/models?category=SUV' },
            { name: 'Electric', path: '/models?category=Electric' },
            { name: 'M Performance', path: '/models' },
        ],
        shopping: [
            { name: 'Build & Price', path: '/models' },
            { name: 'Search Inventory', path: '/models' },
            { name: 'Current Offers', path: '/' },
            { name: 'Find a Dealer', path: '/' },
            { name: 'Estimate Payment', path: '/' },
        ],
        owners: [
            { name: 'My BMW', path: '/' },
            { name: 'BMW Financial', path: '/' },
            { name: 'Maintenance', path: '/' },
            { name: 'Warranty', path: '/' },
            { name: 'Accessories', path: '/' },
        ],
        company: [
            { name: 'About BMW', path: '/' },
            { name: 'Sustainability', path: '/' },
            { name: 'Careers', path: '/' },
            { name: 'Press', path: '/' },
            { name: 'Contact Us', path: '/' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-bmw-black border-t border-bmw-gray-800">
            {/* Main Footer */}
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                    <div className="bg-bmw-blue"></div>
                                    <div className="bg-white"></div>
                                    <div className="bg-white"></div>
                                    <div className="bg-bmw-blue"></div>
                                </div>
                            </div>
                            <span className="text-white font-bold text-lg tracking-wider">BMW</span>
                        </Link>
                        <p className="text-bmw-gray-400 text-sm leading-relaxed mb-6">
                            The Ultimate Driving Machine. Experience sheer driving pleasure with BMW.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-bmw-gray-800 flex items-center justify-center text-bmw-gray-400 hover:bg-bmw-blue hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Vehicles */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Vehicles
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.vehicles.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-bmw-gray-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shopping */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Shopping
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.shopping.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-bmw-gray-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Owners */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Owners
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.owners.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-bmw-gray-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-bmw-gray-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Bar */}
                <div className="mt-16 pt-8 border-t border-bmw-gray-800">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-bmw-gray-400 text-sm">
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <MapPin size={16} />
                            <span>Find a Dealer</span>
                        </a>
                        <a href="tel:1-800-831-1117" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={16} />
                            <span>1-800-831-1117</span>
                        </a>
                        <a href="mailto:contact@bmw.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={16} />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-bmw-gray-800">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-bmw-gray-500 text-xs">
                            © 2024 BMW Clone. This is a portfolio project, not affiliated with BMW AG.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-bmw-gray-500">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
