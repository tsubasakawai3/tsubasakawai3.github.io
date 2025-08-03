import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  demoUrl, 
  githubUrl, 
  onClick 
}) => {
  return (
    <motion.div
      className="min-w-[320px] md:min-w-[360px] bg-gray-900 rounded-lg overflow-hidden mx-4 cursor-pointer border border-gray-800 hover:border-red-600 transition-colors"
      whileHover={{ 
        scale: 1.03,
        y: -8,
        boxShadow: "0 15px 40px rgba(229, 9, 20, 0.4)"
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            className="opacity-0 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 font-poppins">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoUrl && (
            <motion.button
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded font-medium text-sm hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(demoUrl, '_blank');
              }}
            >
              Demo
            </motion.button>
          )}
          {githubUrl && (
            <motion.button
              className="flex-1 border border-gray-600 text-gray-300 py-2 px-4 rounded font-medium text-sm hover:border-gray-500 hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, '_blank');
              }}
            >
              Code
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
