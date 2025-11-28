import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 glass-effect hover-scale"
            onClick={() => {
              document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
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
  );
};

export default HeroSection;
