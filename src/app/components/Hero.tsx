import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/ca9fc4ec20c9f23b728631f684ac3c533bbadb75.png';
import profileImage from 'figma:asset/692f21cf11a038d750a1c0bb3e199330faf7a003.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <motion.span 
              className="text-white bg-accent px-2 py-1 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Профессиональная поддержка
            </motion.span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl">
            <span className="text-accent">Ваше психологическое здоровье</span> —{' '}
            <span className="text-[#FFB894]">наш приоритет</span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-lg">
            Справимся вместе, потому что вы заслуживаете жить полноценной жизнью, чувствовать себя услышанными и понятыми.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
            >
              Записаться на консультацию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl text-primary">10+</div>
              <div className="text-sm text-foreground/60">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl text-primary">500+</div>
              <div className="text-sm text-foreground/60">клиентов</div>
            </div>
            <div>
              <div className="text-3xl text-primary">98%</div>
              <div className="text-sm text-foreground/60">довольных</div>
            </div>
          </div>

          {/* Image under stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl mt-8"
          >
            <ImageWithFallback
              src={heroImage}
              alt="Уютная атмосфера для консультаций"
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >

        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
      />
    </section>
  );
}