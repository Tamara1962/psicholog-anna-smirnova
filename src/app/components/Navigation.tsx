import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/692f21cf11a038d750a1c0bb3e199330faf7a003.png';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'О психологе', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-1">
                <Heart className="w-7 h-7 text-primary" fill="currentColor" />
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/20">
                  <ImageWithFallback
                    src={profileImage}
                    alt="Психолог Анна"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-foreground hover:text-white hover:bg-accent active:text-white active:bg-accent transition-all duration-300 px-4 py-2 rounded-lg">Психолог Анна</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-end gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/70 hover:text-white hover:bg-accent active:underline active:decoration-white active:decoration-2 transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Записаться
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-40 bg-white md:hidden pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Записаться
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}