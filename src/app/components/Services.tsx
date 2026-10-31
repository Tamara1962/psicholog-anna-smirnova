import { motion, AnimatePresence } from 'motion/react';
import { Brain, HeartHandshake, Users2, Sparkles, Shield, Clock, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Brain,
    title: 'Индивидуальные консультации',
    description:
      'Работа с тревогой, депрессией, стрессом, паническими атаками и другими эмоциональными трудностями',
    features: ['Очно или онлайн', 'Продолжительность 50 мин', 'КПТ, гештальт-терапия'],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    price: '3 500 ₽',
    priceDescription: 'За одну сессию (50 минут)',
  },
  {
    icon: HeartHandshake,
    title: 'Работа с травмой',
    description:
      'Помощь в преодолении посттравматического стресса, детских травм и сложных жизненных ситуаций',
    features: ['EMDR-терапия', 'Поддерживающая среда', 'Индивидуальный подход'],
    color: 'bg-accent/10',
    iconColor: 'text-accent',
    price: '4 500 ₽',
    priceDescription: 'За одну сессию (60 минут)',
  },
  {
    icon: Users2,
    title: 'Семейная и парная терапия',
    description:
      'Помощь в улучшении коммуникации, разрешении конфликтов и укреплении отношений',
    features: ['Работа с парами', 'Семейные консультации', 'Медиация конфликтов'],
    color: 'bg-[#8BA888]/10',
    iconColor: 'text-[#8BA888]',
    price: '6 000 ₽',
    priceDescription: 'За одну сессию (90 минут)',
  },
  {
    icon: Sparkles,
    title: 'Работа с самооценкой',
    description:
      'Повышение уверенности в себе, принятие себя и развитие здоровой самооценки',
    features: ['Личностный рост', 'Работа с убеждениями', 'Развитие самосознания'],
    color: 'bg-[#C9B8A8]/10',
    iconColor: 'text-[#C9B8A8]',
    price: '3 500 ₽',
    priceDescription: 'За одну сессию (50 минут)',
  },
  {
    icon: Shield,
    title: 'Кризисная поддержка',
    description:
      'Экстренная психологическая помощь в острых кризисных ситуациях и эмоциональных кризисах',
    features: ['Быстрое реагирование', 'Стабилизация состояния', 'План действий'],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    price: '5 000 ₽',
    priceDescription: 'За экстренную консультацию (60 минут)',
  },
  {
    icon: Clock,
    title: 'Долгосрочная терапия',
    description:
      'Глубокая проработка личностных паттернов, установок и поведенческих привычек',
    features: ['Длительное сопровождение', 'Глубинные изменения', 'Системная работа'],
    color: 'bg-accent/10',
    iconColor: 'text-accent',
    price: '3 000 ₽',
    priceDescription: 'За сессию при покупке абонемента от 10 встреч',
  },
];

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [priceModalOpen, setPriceModalOpen] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const openPriceModal = (index: number) => {
    setPriceModalOpen(index);
  };

  const closePriceModal = () => {
    setPriceModalOpen(null);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-rose-50/40 via-blue-50/30 to-violet-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-white bg-accent px-4 py-1 rounded-full">Услуги</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-4">Как я могу помочь</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto bg-white px-6 py-4 rounded-lg">
            Индивидуальный подход к каждому клиенту и работа с широким спектром запросов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              <motion.h3 
                onClick={() => toggleService(index)}
                className="text-2xl text-white bg-accent mb-3 px-4 py-3 rounded-lg relative overflow-hidden cursor-pointer"
                animate={{
                  backgroundImage: [
                    'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                whileTap={{ 
                  color: '#60a5fa',
                  backgroundColor: '#ffffff',
                  transition: { duration: 0.2 }
                }}
              >
                {service.title}
              </motion.h3>
              
              {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) ? (
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-foreground/70 mb-6"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-foreground/70 mb-6"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              )}

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => openPriceModal(index)}
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white rounded-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                <span className="relative z-10">СТОИМОСТЬ</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Price Modal */}
        <AnimatePresence>
          {priceModalOpen !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closePriceModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePriceModal}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="text-center">
                  {(() => {
                    const ServiceIcon = services[priceModalOpen].icon;
                    return (
                      <div className={`${services[priceModalOpen].color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                        <ServiceIcon className={`w-10 h-10 ${services[priceModalOpen].iconColor}`} />
                      </div>
                    );
                  })()}

                  <h3 className="text-2xl text-foreground mb-2">
                    {services[priceModalOpen].title}
                  </h3>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="my-8"
                  >
                    <div className="text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {services[priceModalOpen].price}
                    </div>
                    <p className="text-sm text-foreground/60">
                      {services[priceModalOpen].priceDescription}
                    </p>
                  </motion.div>

                  <div className="bg-gradient-to-br from-rose-50/40 via-blue-50/30 to-violet-50/40 rounded-2xl p-6 mb-6">
                    <p className="text-sm text-foreground/70">
                      Стоимость может варьироваться в зависимости от формата работы и длительности программы. На первой консультации мы обсудим все детали.
                    </p>
                  </div>

                  <motion.button
                    onClick={() => {
                      closePriceModal();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg transition-shadow"
                  >
                    Записаться на консультацию
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl text-foreground">Не знаете, что выбрать?</h3>
            <p className="text-foreground/70">
              На первой встрече мы обсудим ваш запрос и подберем наиболее подходящий формат работы.
              Консультация поможет определить направление и составить план терапии.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors inline-block mt-4"
            >
              Записаться на первую встречу
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}