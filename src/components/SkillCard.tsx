import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: string;
  icon?: string;
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, description }) => {
  return (
    <motion.div
      className="min-w-[240px] md:min-w-[280px] bg-gray-900 rounded-lg mx-3 cursor-pointer border border-gray-800 hover:border-red-600 transition-colors"
      whileHover={{ 
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 30px rgba(229, 9, 20, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        {icon && (
          <div className="text-4xl mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
          {name}
        </h3>
        <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
          {level}
        </div>
        {description && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;
