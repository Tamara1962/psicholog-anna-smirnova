import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showUserAgreement, setShowUserAgreement] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <span className="text-xl text-foreground">Психолог Анна</span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Профессиональная психологическая помощь для тех, кто хочет изменить свою жизнь к лучшему
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-4">Навигация</h3>
            <nav className="space-y-2">
              {[
                { label: 'О психологе', href: '#about' },
                { label: 'Услуги', href: '#services' },
                { label: 'Отзывы', href: '#testimonials' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (999) 123-45-67
              </a>
              <a
                href="mailto:anna.psycholog@mail.ru"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                anna.psycholog@mail.ru
              </a>
              <div className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Москва, ул. Примерная, 10
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Психолог Анна Петрова. Все права защищены.
            </p>
            <div className="flex gap-6">
              <motion.button
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
                onClick={() => setShowPrivacyPolicy(true)}
                whileHover={{ 
                  scale: 1.05,
                  color: '#3b82f6',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                Политика конфиденциальности
              </motion.button>
              <motion.button
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
                onClick={() => setShowUserAgreement(true)}
                whileHover={{ 
                  scale: 1.05,
                  color: '#3b82f6',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                Пользовательское соглашение
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Политика конфиденциальности</DialogTitle>
            <DialogDescription>
              Ваша личная информация будет использоваться только для предоставления услуг.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* User Agreement Dialog */}
      <Dialog open={showUserAgreement} onOpenChange={setShowUserAgreement}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Пользовательское соглашение</DialogTitle>
            <DialogDescription>
              Пожалуйста, ознакомьтесь с условиями использования нашего сайта.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  );
}