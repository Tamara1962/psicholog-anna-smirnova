import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Мария, 34 года',
    issue: 'Тревожное расстройство',
    text: 'Анна помогла мне понять источники моей тревоги и научила техникам, которые реально работают. После нескольких месяцев работы я чувствую себя гораздо увереннее и спокойнее.',
    rating: 5,
  },
  {
    name: 'Дмитрий, 42 года',
    issue: 'Депрессия',
    text: 'Я долго не мог решиться на терапию, но это было лучшее решение. Профессиональный подход, понимание и поддержка помогли мне выйти из темной полосы и вернуться к полноценной жизни.',
    rating: 5,
  },
  {
    name: 'Елена и Сергей',
    issue: 'Семейная терапия',
    text: 'Мы были на грани развода, но Анна помогла нам наладить общение и понять друг друга. Сейчас наши отношения стали намного крепче, чем раньше.',
    rating: 5,
  },
  {
    name: 'Анна, 28 лет',
    issue: 'Низкая самооценка',
    text: 'Работа с психологом изменила мое отношение к себе. Я научилась ценить себя и не бояться быть собой. Спасибо за чуткость и профессионализм!',
    rating: 5,
  },
  {
    name: 'Владимир, 38 лет',
    issue: 'ПТСР',
    text: 'После травмирующего события я не мог жить нормально. Терапия помогла мне переработать опыт и снова почувствовать себя в безопасности. Благодарен за помощь.',
    rating: 5,
  },
  {
    name: 'Ольга, 45 лет',
    issue: 'Кризис среднего возраста',
    text: 'В моей жизни наступил период неопределенности. Анна помогла мне найти новые смыслы и цели, пересмотреть приоритеты и начать новый этап с энтузиазмом.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-orange-50/40 via-blue-50/30 to-green-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent">Отзывы</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-4">Что говорят клиенты</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Реальные истории людей, которым удалось справиться со своими трудностями
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/30 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 relative z-10">"{testimonial.text}"</p>

              <div className="pt-4 border-t border-border">
                <div className="text-foreground">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.issue}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-secondary/30 to-white rounded-2xl p-8 shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 relative z-10">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="text-foreground">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-foreground/60">{testimonials[activeIndex].issue}</div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl text-primary mb-1">4.9/5</div>
              <div className="text-sm text-foreground/60">Средняя оценка</div>
            </div>
            <div>
              <div className="text-3xl text-primary mb-1">150+</div>
              <div className="text-sm text-foreground/60">Отзывов</div>
            </div>
            <div>
              <div className="text-3xl text-primary mb-1">98%</div>
              <div className="text-sm text-foreground/60">Рекомендуют</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}