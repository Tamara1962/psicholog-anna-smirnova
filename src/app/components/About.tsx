import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import therapyImage from 'figma:asset/dac97bc58f235bba871536b18016d7a79d5353af.png';
import supportImage from 'figma:asset/641a39331fdf3de55da6408849cc2da2101f1081.png';
import tarotImage from 'figma:asset/13f56c90705cd3052f0e02f7f02fbca5543817d1.png';
import mentalHealthImage from 'figma:asset/ce35bcbe34e35c65ce79fd8ea8b75cfc90beb749.png';
import labyrinthImage from 'figma:asset/5ebb0ab9af4f72f8f8666ab28b616ad0ac68ffb9.png';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const credentials = [
  {
    icon: Award,
    title: 'Сертификация',
    description: 'Клинический психолог, сертифицированный специалист по КПТ',
  },
  {
    icon: BookOpen,
    title: 'Образование',
    description: 'МГУ им. М.В. Ломоносова, факультет психологии',
  },
  {
    icon: Users,
    title: 'Специализация',
    description: 'Работа с тревожными расстройствами, депрессией, ПТСР',
  },
  {
    icon: Heart,
    title: 'Подход',
    description: 'Когнитивно-поведенческая терапия, гештальт-терапия',
  },
];

export function About() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [showApproach, setShowApproach] = useState(false);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50/30 via-pink-50/20 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex gap-6 max-w-6xl mx-auto justify-center items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-1/6 bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center p-8">
              <p className="text-center italic text-gray-700 leading-relaxed -rotate-6 transform hover:rotate-0 transition-transform duration-300">
                Я ваш попутчик на пути к себе.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-1/6 -translate-y-full">
              <ImageWithFallback
                src={supportImage}
                alt="Поддержка и забота"
                className="w-full aspect-square object-cover rounded-full"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-1/6">
              <ImageWithFallback
                src={tarotImage}
                alt="Психологические инструменты"
                className="w-full aspect-[16/27] object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-1/6">
              <ImageWithFallback
                src={mentalHealthImage}
                alt="Работа с эмоциями"
                className="w-full aspect-square object-cover rounded-full"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-1/6 bg-gradient-to-tr from-green-50 to-blue-50 flex items-center justify-center p-8" style={{ transform: 'translateY(-5cm)' }}>
              <p className="text-center text-gray-700 leading-relaxed rotate-3 transform hover:scale-110 transition-all duration-300">
                Мне есть до вас дело.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent">О психологе</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-4">Анна Петрова</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Я помогаю людям находить внутренние ресурсы для преодоления сложных жизненных ситуаций
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">

            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground/80">
                Более 10 лет я посвятила изучению человеческой психики и помощи людям в преодолении
                эмоциональных трудностей. Моя цель — создать безопасное пространство, где вы сможете
                открыться и начать путь к исцелению.
              </p>
              <p className="text-lg text-foreground/80">
                Я работаю с тревожными расстройствами, депрессией, травмами, сложностями в отношениях
                и самооценке. Использую научно обоснованные методы, адаптированные под каждого клиента.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
              <p className="text-lg italic text-foreground/90">
                "Каждый человек заслуживает быть услышанным, понятым и поддержанным. Моя задача —
                помочь вам найти свой путь к внутренней гармонии и благополучию."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgb(59, 130, 246)',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    x: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    if (item.title === 'Сертификация') {
                      setShowCertificate(true);
                    } else if (item.title === 'Образование') {
                      setShowEducation(true);
                    } else if (item.title === 'Специализация') {
                      setShowSpecialization(true);
                    } else if (item.title === 'Подход') {
                      setShowApproach(true);
                    }
                  }}
                  className="bg-secondary/50 p-4 rounded-xl cursor-pointer group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:text-white transition-colors duration-300" />
                  <div className="text-sm text-foreground/90 mb-1 group-hover:text-white transition-colors duration-300">{item.title}</div>
                  <div className="text-xs text-foreground/60 group-hover:text-white transition-colors duration-300">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Сертификаты и квалификации</DialogTitle>
            <DialogDescription>
              Подтвержденная квалификация и специализации
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Сертификат клинического психолога</h3>
              <p className="text-sm text-gray-600">Министерство здравоохранения РФ, 2015</p>
            </div>
            
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Специалист по когнитивно-поведенческой терапии (КПТ)</h3>
              <p className="text-sm text-gray-600">Институт когнитивной терапии, 2017</p>
            </div>
            
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Сертификат по гештальт-терапии</h3>
              <p className="text-sm text-gray-600">Московский гештальт-институт, 2018</p>
            </div>
            
            <div className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Специализация: работа с травмой и ПТСР</h3>
              <p className="text-sm text-gray-600">Центр травматерапии, 2020</p>
            </div>
            
            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Сертификат по семейной и парной терапии</h3>
              <p className="text-sm text-gray-600">Институт системной семейной терапии, 2022</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Education Dialog */}
      <Dialog open={showEducation} onOpenChange={setShowEducation}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Образование</DialogTitle>
            <DialogDescription>
              Академическое образование и дополнительные специализации
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">МГУ им. М.В. Ломоносова, факультет психологии</h3>
              <p className="text-sm text-gray-600 mb-2">од выпуска: 2010</p>
              <p className="text-sm text-gray-700">Специалист-психолог, специализация: клиническая психология</p>
            </div>
            
            <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Дополнительная специализация</h3>
              <p className="text-sm text-gray-700 mb-1">• Магистратура по клинической психологии, МГУ (2010-2012)</p>
              <p className="text-sm text-gray-700 mb-1">• Специализация в области нейропсихологии</p>
              <p className="text-sm text-gray-700">• Курсы повышения квалификации по психотерапии</p>
            </div>
            
            <div className="border-l-4 border-teal-600 bg-teal-50 p-6 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Постдипломное образование</h3>
              <p className="text-sm text-gray-700 mb-1">• Аспирантура по медицинской психологии (2012-2015)</p>
              <p className="text-sm text-gray-700">• Кандидат психологических наук</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Specialization Dialog */}
      <Dialog open={showSpecialization} onOpenChange={setShowSpecialization}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Специализация</DialogTitle>
            <DialogDescription>
              Основные направления работы
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Работа с тревожными расстройствами</h3>
              <p className="text-sm text-gray-600">Использование когнитивно-поведенческой терапии для управления тревогой и страхами.</p>
            </div>
            
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Депрессия</h3>
              <p className="text-sm text-gray-600">Помощь в преодолении депрессивных состояний с использованием когнитивно-поведенческой терапии.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">ПТСР</h3>
              <p className="text-sm text-gray-600">Работа с посттравматическим стрессовым расстройством с использованием гештальт-терапии и других методов.</p>
            </div>
            
            <div className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Сложности в отношениях</h3>
              <p className="text-sm text-gray-600">Помощь в улучшении отношений с партнером или близкими людьми с использованием семейной и парной терапии.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Самооценка</h3>
              <p className="text-sm text-gray-600">Работа над улучшением самооценки и уверенности в себе с использованием когнитивно-поведенческой терапии.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Approach Dialog */}
      <Dialog open={showApproach} onOpenChange={setShowApproach}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Подход</DialogTitle>
            <DialogDescription>
              Методы и техники работы
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Когнитивно-поведенческая терапия (КПТ)</h3>
              <p className="text-sm text-gray-600">Методика, направленная на изменение негативных мыслей и поведения для улучшения эмоционального состояния.</p>
            </div>
            
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Гештальт-терапия</h3>
              <p className="text-sm text-gray-600">Методика, которая помогает клиентам осознавать и интегрировать свои чувства и мысли в целостное восприятие себя.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Семейная и парная терапия</h3>
              <p className="text-sm text-gray-600">Методика, направленная на улучшение отношений между членами семьи или партнерами.</p>
            </div>
            
            <div className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Терапия посттравматического стрессового расстройства (ПТСР)</h3>
              <p className="text-sm text-gray-600">Методика, направленная на обработку травматических воспоминаний и улучшение эмоционального состояния после травмы.</p>
            </div>
            
            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Нейропсихологическая терапия</h3>
              <p className="text-sm text-gray-600">Методика, основанная на знаниях о работе мозга, направленная на улучшение когнитивных функций и эмоционального состояния.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}