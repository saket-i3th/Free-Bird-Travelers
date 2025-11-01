'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Gallery data - in a real app, this would come from a CMS or API
  const galleryImages = [
    // Domestic Destinations
    { id: 1, category: 'domestic', destination: 'Goa', title: 'Pristine Beaches of Goa', description: 'Crystal clear waters and golden sand beaches' },
    { id: 2, category: 'domestic', destination: 'Kerala', title: 'Backwaters of Kerala', description: 'Serene houseboat journeys through lush greenery' },
    { id: 3, category: 'domestic', destination: 'Manali', title: 'Snow-capped Mountains', description: 'Breathtaking views of the Himalayas' },
    { id: 4, category: 'domestic', destination: 'Rajasthan', title: 'Royal Palaces', description: 'Magnificent architecture and rich heritage' },
    { id: 5, category: 'domestic', destination: 'Goa', title: 'Sunset at Anjuna Beach', description: 'Spectacular evening views by the Arabian Sea' },
    { id: 6, category: 'domestic', destination: 'Kerala', title: 'Tea Plantations', description: 'Rolling hills covered in emerald tea gardens' },

    // International Destinations
    { id: 7, category: 'international', destination: 'Dubai', title: 'Burj Khalifa at Night', description: 'Iconic skyline illuminated against the desert sky' },
    { id: 8, category: 'international', destination: 'Thailand', title: 'Phi Phi Islands', description: 'Tropical paradise with turquoise waters' },
    { id: 9, category: 'international', destination: 'Singapore', title: 'Gardens by the Bay', description: 'Futuristic architecture meets nature' },
    { id: 10, category: 'international', destination: 'Maldives', title: 'Overwater Villas', description: 'Luxury accommodation above crystal-clear lagoons' },
    { id: 11, category: 'international', destination: 'Europe', title: 'Eiffel Tower, Paris', description: 'The iron lady standing tall in the City of Light' },
    { id: 12, category: 'international', destination: 'Europe', title: 'Swiss Alps', description: 'Majestic mountains and pristine alpine lakes' },

    // Adventure
    { id: 13, category: 'adventure', destination: 'Manali', title: 'River Rafting', description: 'Thrilling white water adventures in the mountains' },
    { id: 14, category: 'adventure', destination: 'Dubai', title: 'Desert Safari', description: 'Exciting dune bashing and camel rides' },
    { id: 15, category: 'adventure', destination: 'Thailand', title: 'Island Hopping', description: 'Exploring hidden gems across tropical islands' },
    { id: 16, category: 'adventure', destination: 'Nepal', title: 'Himalayan Trekking', description: 'Epic journeys to the roof of the world' },

    // Culture
    { id: 17, category: 'culture', destination: 'Rajasthan', title: 'Traditional Dance', description: 'Vibrant folk performances under starlit skies' },
    { id: 18, category: 'culture', destination: 'Kerala', title: 'Kathakali Performance', description: 'Classical dance forms telling ancient stories' },
    { id: 19, category: 'culture', destination: 'Japan', title: 'Temple Gardens', description: 'Peaceful zen gardens and ancient temples' },
    { id: 20, category: 'culture', destination: 'Europe', title: 'Historic Castles', description: 'Medieval architecture and royal heritage' },

    // Food
    { id: 21, category: 'food', destination: 'Thailand', title: 'Street Food Markets', description: 'Authentic local flavors and aromatic spices' },
    { id: 22, category: 'food', destination: 'Kerala', title: 'Traditional Cuisine', description: 'Delicious South Indian delicacies' },
    { id: 23, category: 'food', destination: 'Europe', title: 'Wine Tasting', description: 'Exquisite wines from renowned vineyards' },
    { id: 24, category: 'food', destination: 'Dubai', title: 'Fine Dining', description: 'World-class restaurants with stunning views' }
  ];

  const categories = [
    { key: 'all', label: 'All Photos', icon: '📸' },
    { key: 'domestic', label: 'Domestic', icon: '🇮🇳' },
    { key: 'international', label: 'International', icon: '🌍' },
    { key: 'adventure', label: 'Adventure', icon: '🏔️' },
    { key: 'culture', label: 'Culture', icon: '🏛️' },
    { key: 'food', label: 'Food', icon: '🍜' }
  ];

  const getFilteredImages = () => {
    return selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-shadow"
            >
              Travel Gallery
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl leading-relaxed text-shadow"
            >
              Discover the beauty of destinations through the eyes of our travelers
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-2 bg-neutral-100 rounded-lg p-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                    selectedCategory === category.key
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-lg text-neutral-600">
              Showing {filteredImages.length} photos
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.key === selectedCategory)?.label} category`}
            </p>
          </motion.div>

          <motion.div
            key={selectedCategory} // Key to trigger animation on filter change
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div key={image.id} variants={fadeInUp}>
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image Placeholder with Gradient */}
                  <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl">📸</span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/50 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                        {categories.find(c => c.key === image.category)?.icon} {image.destination}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-lg mb-1 text-shadow">{image.title}</h3>
                        <p className="text-sm text-white/90 text-shadow">{image.description}</p>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-xl">🔍</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <p className="text-neutral-600 text-lg">No photos found for the selected category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Travel Moments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6"
            >
              Capture Your Travel Moments
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              Every journey creates memories worth treasuring. Share your travel photos with us and inspire others to explore the world.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Share Your Journey",
                content: "Tag us in your travel photos on social media and become part of our travel community.",
                icon: "📱"
              },
              {
                title: "Professional Photography",
                content: "We can arrange professional photographers to capture your special moments during the trip.",
                icon: "📷"
              },
              {
                title: "Travel Albums",
                content: "Get personalized photo albums delivered to your home as a keepsake of your amazing journey.",
                icon: "📖"
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-shadow"
            >
              Ready to Create Your Own Travel Story?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 text-shadow"
            >
              Join thousands of happy travelers who have created unforgettable memories with us
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-neutral-100 font-bold px-8 py-4 rounded-lg transition-colors">
                Plan Your Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4 rounded-lg transition-colors">
                View Destinations
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-primary-400 to-secondary-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-8xl">📸</span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {categories.find(c => c.key === selectedImage.category)?.icon} {selectedImage.destination}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
