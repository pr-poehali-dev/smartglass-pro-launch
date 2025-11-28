import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQAndCTA = () => {
  const [email, setEmail] = useState('');

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
    <>
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
    </>
  );
};

export default FAQAndCTA;
