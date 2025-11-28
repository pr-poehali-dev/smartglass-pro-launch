import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CasesSection = () => {
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

  return (
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
  );
};

export default CasesSection;
