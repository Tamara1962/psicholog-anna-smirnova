import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'anna.psycholog@mail.ru',
      link: 'mailto:anna.psycholog@mail.ru',
    },
    {
      icon: MapPin,
      label: 'Адрес',
      value: 'Москва, ул. Примерная, 10',
      link: null,
    },
    {
      icon: Clock,
      label: 'Часы работы',
      value: 'Пн-Пт: 10:00-20:00, Сб: 12:00-18:00',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary">Контакты</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-4">Запишитесь на консультацию</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Первый шаг к изменениям начинается здесь. Заполните форму или свяжитесь удобным способом
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Сообщение (необязательно)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Расскажите немного о вашем запросе"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Отправлено!
                  </>
                ) : (
                  <>
                    Записаться
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-foreground/60 text-center">
                Отправляя форму, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick contact buttons */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl text-foreground mb-6">Свяжитесь со мной напрямую</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  <span className="text-sm text-foreground">WhatsApp</span>
                </a>
                <a
                  href="https://t.me/psycholog_anna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 rounded-xl transition-colors"
                >
                  <Send className="w-8 h-8 text-[#0088cc]" />
                  <span className="text-sm text-foreground">Telegram</span>
                </a>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comfort message */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8">
              <h4 className="text-lg text-foreground mb-3">Перед записью волнуетесь?</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Это абсолютно нормально! Обращение к психологу — смелый шаг. Все консультации
                проходят в конфиденциальной и безопасной обстановке. Я создам комфортное
                пространство, где вы сможете говорить обо всем, что вас беспокоит.
              </p>
              <p className="text-sm text-foreground/70">
                💙 Первая консультация — это знакомство, где мы обсудим ваш запрос и подберем
                подходящий формат работы.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}