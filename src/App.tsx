import { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy load components for code splitting
const ScrollLoop = lazy(() => import('./components/ScrollLoop'));
const SkillCard = lazy(() => import('./components/SkillCard'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));
const Modal = lazy(() => import('./components/Modal'));

// Type definitions
interface Skill {
  name: string;
  level: string;
  icon: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

// Loading fallback component
const LoadingFallback = ({ text = 'Loading...' }: { text?: string }) => (
  <div className="flex items-center justify-center py-8">
    <motion.div
      className="text-gray-400 text-lg"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {text}
    </motion.div>
  </div>
);

// Sample data
const skills: Skill[] = [
  {
    name: 'React',
    level: 'Expert',
    icon: '⚛️',
    description: 'Building modern web applications with hooks, context, and performance optimization'
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    icon: '📘',
    description: 'Type-safe development with advanced TypeScript patterns and generics'
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    icon: '🟢',
    description: 'Server-side development with Express, APIs, and database integration'
  },
  {
    name: 'Python',
    level: 'Expert',
    icon: '🐍',
    description: 'Full-stack development, data analysis, and machine learning applications'
  },
  {
    name: 'AWS',
    level: 'Intermediate',
    icon: '☁️',
    description: 'Cloud infrastructure, serverless functions, and deployment automation'
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    icon: '🐳',
    description: 'Containerization, orchestration, and development environment setup'
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'User authentication and authorization',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for inventory management',
      'Responsive design for all devices'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Real-time collaboration',
      'Drag and drop task management',
      'Team member assignment',
      'Progress tracking and analytics',
      'Mobile-responsive interface'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Location-based weather data',
      'Interactive weather maps',
      '7-day weather forecast',
      'Weather analytics and charts',
      'Geolocation support'
    ]
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack
            <span className="text-red-500 block">Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Creating modern web applications with cutting-edge technologies
            <br className="hidden md:block" />
            and exceptional user experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              My Skills
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mt-16 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
              My <span className="text-red-500">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <Suspense fallback={<LoadingFallback text="Loading skills..." />}>
            <ScrollLoop
              items={skills}
              renderItem={(skill, index) => (
                <Suspense key={index} fallback={<div className="min-w-[240px] md:min-w-[280px] h-48 bg-gray-800 rounded-lg animate-pulse mx-3" />}>
                  <SkillCard 
                    name={(skill as Skill).name}
                    level={(skill as Skill).level}
                    icon={(skill as Skill).icon}
                    description={(skill as Skill).description}
                  />
                </Suspense>
              )}
              className="mb-8 pt-8"
            />
          </Suspense>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>
          
          <Suspense fallback={<LoadingFallback text="Loading projects..." />}>
            <ScrollLoop
              items={projects}
              renderItem={(project, index) => (
                <Suspense key={index} fallback={<div className="min-w-[320px] md:min-w-[360px] h-96 bg-gray-700 rounded-lg animate-pulse mx-4" />}>
                  <ProjectCard 
                    title={(project as Project).title}
                    description={(project as Project).description}
                    image={(project as Project).image}
                    technologies={(project as Project).technologies}
                    demoUrl={(project as Project).demoUrl}
                    githubUrl={(project as Project).githubUrl}
                    onClick={() => handleProjectClick(project as Project)}
                  />
                </Suspense>
              )}
              className="mb-8 pt-8"
              autoScroll={false}
            />
          </Suspense>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Let's <span className="text-red-500">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's discuss how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contact@example.com"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 hover:text-white transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedProject.title}
            description={selectedProject.description}
            image={selectedProject.image}
            technologies={selectedProject.technologies}
            demoUrl={selectedProject.demoUrl}
            githubUrl={selectedProject.githubUrl}
            features={selectedProject.features}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
