import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BenefitsAndTech = () => {
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

  return (
    <>
      <section id="demo-video" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Видео-демонстрация</h2>
            <p className="text-xl text-muted-foreground">Управление прозрачностью в реальном времени</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-3xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden relative group mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform cursor-pointer">
                      <Icon name="Play" size={40} className="text-primary ml-1" />
                    </div>
                    <p className="text-lg font-medium">Нажмите, чтобы увидеть SmartGlass в действии</p>
                  </div>
                </div>
                <img 
                  src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9781f769-0f73-4b81-8426-37c4198f437d.jpg"
                  alt="Smart Glass Demo"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-effect rounded-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Info" size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Интерактивная демонстрация технологии</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="glass-effect">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать презентацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">До и После</h2>
            <p className="text-xl text-muted-foreground">Результаты использования SmartGlass PRO</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-96">
                <img 
                  src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/d96d4848-d245-4aec-a160-8d2f0b7dad6a.jpg"
                  alt="До установки SmartGlass"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-destructive/90 backdrop-blur-sm rounded-full font-semibold text-sm">
                  До
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold mb-2">Обычное стекло</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={16} className="text-destructive" />
                      Частая мойка фасадов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={16} className="text-destructive" />
                      Перегрев помещений
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={16} className="text-destructive" />
                      Высокие расходы на обслуживание
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-96">
                <img 
                  src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/07c0a031-fe18-4c7c-b5b1-a4e99da7792c.jpg"
                  alt="После установки SmartGlass"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full font-semibold text-sm">
                  После
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold mb-2">SmartGlass PRO</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Самоочистка стекла
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Контроль температуры
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Экономия до 70%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">-70%</div>
                <div className="text-muted-foreground">расходов на мойку</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">-30%</div>
                <div className="text-muted-foreground">затрат на климат</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">+15%</div>
                <div className="text-muted-foreground">стоимость объекта</div>
              </div>
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
          
          <div className="mb-12 glass-effect p-8 rounded-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/d4dbc372-f227-412d-85ec-1008ff785684/files/9d56cc08-0ec8-4a92-bf7e-a4576545ddf7.jpg"
                alt="SmartGlass Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Премиальная технология для современных зданий</h3>
                <p className="text-muted-foreground">Установлено в 50+ объектах по всей России</p>
              </div>
            </div>
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
    </>
  );
};

export default BenefitsAndTech;
