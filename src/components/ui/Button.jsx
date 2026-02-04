import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    icon = false,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300';

    const variants = {
        primary: 'px-8 py-4 bg-bmw-blue text-white hover:bg-bmw-blue-light hover:shadow-glow active:scale-95',
        secondary: 'px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-bmw-dark active:scale-95',
        ghost: 'text-white hover:text-bmw-blue',
        dark: 'px-8 py-4 bg-bmw-dark text-white border border-bmw-gray-700 hover:bg-bmw-gray-800 active:scale-95',
    };

    return (
        <motion.button
            whileHover={{ scale: variant !== 'ghost' ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {icon && <ArrowRight className="w-4 h-4" />}
        </motion.button>
    );
};

export default Button;
