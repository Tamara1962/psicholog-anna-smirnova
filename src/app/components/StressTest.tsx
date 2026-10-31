import { motion } from 'motion/react';
import { useState } from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

const questions = [
  'Я часто чувствую тревогу или беспокойство',
  'У меня бывают проблемы со сном',
  'Мне трудно сосредоточиться на задачах',
  'Я чувствую усталость даже после отдыха',
  'Я стал(а) раздражительным(-ой) или нервным(-ой)',
  'У меня бывают головные боли или мышечное напряжение',
  'Мне сложно расслабиться',
  'Я избегаю социальных взаимодействий',
];

type Result = {
  level: string;
  color: string;
  description: string;
  recommendation: string;
};

const results: Record<string, Result> = {
  low: {
    level: 'Низкий уровень стресса',
    color: 'text-[#8BA888]',
    description:
      'Вы хорошо справляетесь со стрессом. Ваше психологическое состояние стабильно.',
    recommendation:
      'Продолжайте поддерживать здоровый образ жизни и практиковать техники релаксации.',
  },
  moderate: {
    level: 'Умеренный уровень стресса',
    color: 'text-primary',
    description:
      'Вы испытываете некоторое напряжение. Стоит обратить внимание на ваше самочувствие.',
    recommendation:
      'Подумайте о консультации с психологом, чтобы научиться эффективным стратегиям управления стрессом.',
  },
  high: {
    level: 'Высокий уровень стресса',
    color: 'text-destructive',
    description:
      'Вы испытываете значительный стресс, который может влиять на вашу жизнь.',
    recommendation:
      'Рекомендуем обратиться к психологу для профессиональной поддержки и работы над снижением стресса.',
  },
};

export function StressTest() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = (): Result => {
    const total = answers.reduce((sum, val) => sum + val, 0);
    const max = questions.length * 4;
    const percentage = (total / max) * 100;

    if (percentage < 33) return results.low;
    if (percentage < 66) return results.moderate;
    return results.high;
  };

  const handleSubmit = () => {
    if (answers.every((a) => a >= 0)) {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setAnswers(Array(questions.length).fill(-1));
    setShowResult(false);
  };

  const allAnswered = answers.every((a) => a >= 0);
  const result = showResult ? calculateResult() : null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary">Самодиагностика</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-4">Тест на уровень стресса</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Оцените свое состояние и узнайте, нужна ли вам помощь психолога
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8 flex gap-4"
        >
          <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm text-foreground/80">
              <strong>Важно:</strong> Этот тест не является профессиональной диагностикой и
              предназначен только для ориентировочной оценки вашего состояния. Для точной диагностики
              обратитесь к специалисту.
            </p>
          </div>
        </motion.div>

        {!showResult ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
          >
            {questions.map((question, index) => (
              <div key={index} className="space-y-3">
                <p className="text-foreground">{question}</p>
                <div className="grid grid-cols-5 gap-2">
                  {['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'].map((label, value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(index, value)}
                      className={`py-3 px-2 rounded-lg text-sm transition-all ${
                        answers[index] === value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`w-full py-4 rounded-xl transition-all ${
                allAnswered
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              {allAnswered ? 'Узнать результат' : 'Ответьте на все вопросы'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div className="text-center">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                  result === results.low
                    ? 'bg-[#8BA888]/10'
                    : result === results.moderate
                    ? 'bg-primary/10'
                    : 'bg-destructive/10'
                }`}
              >
                {result === results.low ? (
                  <CheckCircle2 className="w-10 h-10 text-[#8BA888]" />
                ) : (
                  <AlertCircle
                    className={`w-10 h-10 ${
                      result === results.moderate ? 'text-primary' : 'text-destructive'
                    }`}
                  />
                )}
              </div>
              <h3 className={`text-3xl mb-3 ${result?.color}`}>{result?.level}</h3>
              <p className="text-lg text-foreground/80 mb-6">{result?.description}</p>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6">
              <h4 className="text-lg text-foreground mb-2">Рекомендация</h4>
              <p className="text-foreground/70">{result?.recommendation}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all"
              >
                Записаться на консультацию
              </button>
              <button
                onClick={resetTest}
                className="flex-1 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all"
              >
                Пройти тест заново
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
