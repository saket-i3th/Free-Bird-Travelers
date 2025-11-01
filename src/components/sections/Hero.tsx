'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { formatPhoneForWhatsApp, generateWhatsAppMessage } from '@/lib/utils';

export default function Hero() {
  const handleGetStarted = () => {
    const message = generateWhatsAppMessage();
    window.open(formatPhoneForWhatsApp(COMPANY_INFO.whatsapp) + `&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Free Bird Travelers
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-shadow">
            {COMPANY_INFO.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-shadow opacity-90">
            Experience the world with our personalized travel services. No online bookings, 
            just authentic personal service and unforgettable travel experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="text-lg px-8 py-4 bg-primary-600 hover:bg-primary-700"
          >
            Start Your Journey
          </Button>
          <Button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">✈️</div>
            <h3 className="text-lg font-semibold mb-2">Personal Touch</h3>
            <p className="text-sm opacity-90">Every service handled personally with care and attention</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Global Destinations</h3>
            <p className="text-sm opacity-90">Domestic and international travel experiences</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Customized Tours</h3>
            <p className="text-sm opacity-90">Tailored itineraries to match your preferences</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
