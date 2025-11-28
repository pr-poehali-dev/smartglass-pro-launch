import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  const benefits = [
    {
      icon: 'Sparkles',
      title: 'Самоочистка',
      description: 'До 70% экономии на мойке фасадов. Стекло очищается под действием УФ и влаги автоматически.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: 'Sun',
      title: 'Умное затемнение',
      description: 'До 30% снижение теплопритока. Автоматическая регулировка прозрачности для идеального освещения.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Shield',
      title: 'Приватность',
      description: 'Мгновенное управление прозрачностью без штор и пленок. Конфиденциальность одним нажатием.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Минимум химии и воды. Экологически чистое решение для современных зданий.',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: 'Settings',
      title: 'Интеграция',
      description: 'Подключение к системам умного здания. Полная автоматизация и удаленное управление.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Zap',
      title: 'Сервисная модель',
      description: 'Обслуживание по подписке. Ремонт и замена включены в стоимость.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const technologies = [
    {
      icon: 'Droplets',
      title: 'Гидрофобное покрытие',
      description: 'Специальное нанопокрытие отталкивает воду и грязь, обеспечивая эффект самоочистки при дожде.',
      stats: '99.8% отталкивание воды'
    },
    {
      icon: 'Layers',
      title: 'Электрохромная технология',
      description: 'Изменение прозрачности стекла от прозрачного до матового за 3 секунды по команде.',
      stats: '0-100% затемнение'
    },
    {
      icon: 'Smartphone',
      title: 'IoT интеграция',
      description: 'Подключение к умному зданию, управление через приложение и автоматические сценарии.',
      stats: '24/7 мониторинг'
    }
  ];

  const cases = [
    {
      title: 'Бизнес-центр "Технопарк"',
      location: 'Москва',
      image: 'https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9d56cc08-0ec8-4a92-bf7e-a4576545ddf7.jpg',
      results: [
        { label: 'Экономия на мойке', value: '68%' },
        { label: 'Снижение затрат на климат', value: '24%' },
        { label: 'Окупаемость', value: '3.2 года' }
      ],
      quote: 'Расходы на эксплуатацию фасада сократились почти вдвое. Арендаторы отмечают комфорт и современность здания.'
    },
    {
      title: 'Жилой комплекс "Горизонт"',
      location: 'Санкт-Петербург',
      image: 'https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9781f769-0f73-4b81-8426-37c4198f437d.jpg',
      results: [
        { label: 'Премия к цене квартир', value: '+12%' },
        { label: 'Экономия жильцов', value: '₽15к/год' },
        { label: 'Скорость продаж', value: '+35%' }
      ],
      quote: 'Умное стекло стало главным преимуществом проекта. Квартиры продаются быстрее конкурентов.'
    },
    {
      title: 'Отель "Премиум Резиденс"',
      location: 'Сочи',
      image: 'https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9cc4f55c-570c-4b4f-8771-cb6ef6615b15.jpg',
      results: [
        { label: 'Рейтинг гостей', value: '9.4/10' },
        { label: 'Экономия электроэнергии', value: '28%' },
        { label: 'Повторные визиты', value: '+40%' }
      ],
      quote: 'Гости восхищены технологией. Возможность управлять светом и приватностью — настоящий вау-эффект.'
    }
  ];

  const faqItems = [
    {
      question: 'Что если стекло выйдет из строя?',
      answer: 'Мы работаем по сервисной модели: ремонт и замена включены в подписку. Средний срок реагирования на заявку — 24 часа. Гарантия на стекло — 10 лет.'
    },
    {
      question: 'Окупится ли это?',
      answer: 'Да, благодаря экономии на мойке фасадов (до 70%), снижению затрат на климат-контроль (до 30%) и отказу от штор/пленок. Средняя окупаемость для бизнес-центров — 3-4 года.'
    },
    {
      question: 'Усложнит ли интеграцию?',
      answer: 'Нет — мы подключаемся на этапе проектирования и берем всю техническую часть на себя. Предоставляем готовые API для интеграции с любыми системами BMS.'
    },
    {
      question: 'Подходит ли для жилых помещений?',
      answer: 'Абсолютно. SmartGlass PRO идеален для премиальной недвижимости. Жильцы ценят комфорт, приватность и экономию на коммунальных платежах.'
    },
    {
      question: 'Какие требования к установке?',
      answer: 'Стандартные требования для стеклопакетов + подключение к электросети (220В). Подробную спецификацию предоставляем после консультации.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Мы свяжемся с вами по адресу: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9d56cc08-0ec8-4a92-bf7e-a4576545ddf7.jpg" 
              alt="Smart Glass Building" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in">
              <Icon name="Zap" size={16} className="text-primary animate-glow" />
              <span className="text-sm font-medium">Инновационные технологии для современных зданий</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Стекло, которое работает <br />
              <span className="text-gradient">за вас</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Комплексное решение для девелоперов и фасадных компаний: управление прозрачностью + самоочистка + обслуживание по подписке
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-lg px-8 py-6 hover-scale group">
                Получить расчёт сметы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-effect hover-scale">
                Смотреть демо
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-muted-foreground">экономии на мойке</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                <div className="text-muted-foreground">снижение теплопритока</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl font-bold text-gradient mb-2">0</div>
                <div className="text-muted-foreground">штор и аксессуаров</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card/30 relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9cc4f55c-570c-4b4f-8771-cb6ef6615b15.jpg" 
              alt="Smart Glass Technology" 
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества SmartGlass PRO</h2>
              <p className="text-xl text-muted-foreground">Технологии, которые повышают ценность здания и снижают расходы</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-border hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                      <Icon name={benefit.icon as any} size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
              <p className="text-xl text-muted-foreground">Передовые технологии в каждом стеклопакете</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="glass-effect p-8 rounded-2xl h-full border-2 border-border group-hover:border-primary transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={tech.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{tech.description}</p>
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                      {tech.stats}
                    </div>
                  </div>
                  {index < technologies.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные кейсы</h2>
              <p className="text-xl text-muted-foreground">Результаты, которые говорят сами за себя</p>
            </div>
            
            <div className="space-y-8">
              {cases.map((caseItem, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-border overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="mb-6 rounded-xl overflow-hidden">
                          <img 
                            src={caseItem.image} 
                            alt={caseItem.title}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-6">
                          <Icon name="MapPin" size={16} />
                          <span>{caseItem.location}</span>
                        </div>
                        <div className="glass-effect p-6 rounded-xl border-l-4 border-primary">
                          <Icon name="Quote" size={24} className="text-primary mb-3" />
                          <p className="text-muted-foreground italic leading-relaxed">{caseItem.quote}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {caseItem.results.map((result, idx) => (
                          <div key={idx} className="glass-effect p-6 rounded-xl border border-border">
                            <div className="text-3xl font-bold text-gradient mb-2">{result.value}</div>
                            <div className="text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 glass-effect p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="text-2xl font-bold">50+ успешных проектов</span>
              </div>
              <p className="text-muted-foreground">
                Среди наших клиентов: девелоперы премиальной недвижимости, фасадные компании, производители стеклопакетов
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">Всё, что нужно знать о SmartGlass PRO</p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="glass-effect px-6 rounded-xl border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    <div className="flex items-start gap-3 text-left">
                      <Icon name="HelpCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-11">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-12 rounded-3xl border-2 border-primary/20">
              <Icon name="Rocket" size={48} className="text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Опередите рынок
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Инновационные объекты продаются быстрее, стоят дороже и дешевле в обслуживании. 
                SmartGlass PRO — возможность создать конкурентное преимущество.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="glass-effect border-border text-lg py-6"
                />
                <Button type="submit" size="lg" className="text-lg px-8 py-6 hover-scale whitespace-nowrap">
                  Получить расчёт
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Бесплатная консультация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Расчёт за 24 часа</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Презентация проекта</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gradient">SmartGlass PRO</h3>
                <p className="text-muted-foreground text-sm">
                  Умное стекло как сервис для премиальных объектов
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Продукт</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Преимущества</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    <span>info@smartglass.pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    <span>+7 (495) 123-45-67</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span>Москва, Сити</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 SmartGlass PRO. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;