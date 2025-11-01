'use client';

import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Destinations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6"
          >
            Popular Destinations
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover breathtaking destinations around the world. From serene beaches to majestic mountains, 
            we'll help you create unforgettable memories wherever your heart desires to go.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {destinations.slice(0, 6).map((destination, index) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">📸</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-display font-bold text-xl mb-1 text-shadow">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm text-shadow">
                      {destination.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary-600 font-semibold">
                      {destination.priceRange}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700">
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
