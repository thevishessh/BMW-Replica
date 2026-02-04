import { motion } from 'framer-motion';

const SectionTitle = ({
    subtitle,
    title,
    description,
    align = 'center',
    light = false
}) => {
    const alignClasses = {
        center: 'text-center items-center',
        left: 'text-left items-start',
        right: 'text-right items-end',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col ${alignClasses[align]} mb-12 md:mb-16`}
        >
            {subtitle && (
                <span className="text-bmw-blue font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                    {subtitle}
                </span>
            )}
            <h2 className={`text-display ${light ? 'text-bmw-dark' : 'text-white'} max-w-3xl`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-6 text-lg ${light ? 'text-bmw-gray-600' : 'text-bmw-gray-400'} max-w-2xl`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
