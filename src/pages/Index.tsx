import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const services = [
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description: "Полный комплекс работ по регламентному ТО любой сложности"
    },
    {
      icon: "Settings",
      title: "Ремонт двигателя",
      description: "Диагностика и ремонт двигателей всех типов и марок автомобилей"
    },
    {
      icon: "Gauge",
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля на современном оборудовании"
    },
    {
      icon: "Sparkles",
      title: "Кузовной ремонт",
      description: "Восстановление геометрии кузова, покраска, полировка"
    },
    {
      icon: "CircleDot",
      title: "Шиномонтаж",
      description: "Балансировка колес, замена шин, сезонное хранение"
    },
    {
      icon: "Battery",
      title: "Электрика",
      description: "Ремонт и обслуживание электрооборудования автомобиля"
    }
  ];

  const reviews = [
    {
      name: "Александр М.",
      rating: 5,
      text: "Отличный сервис! Быстро провели диагностику и устранили все неисправности. Цены адекватные, работают профессионалы.",
      date: "2 недели назад"
    },
    {
      name: "Елена К.",
      rating: 5,
      text: "Обслуживаюсь здесь уже 3 года. Всегда качественно и в срок. Мастера знают свое дело, объясняют все понятно.",
      date: "1 месяц назад"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Сделали кузовной ремонт после ДТП - результат превзошел ожидания! Как новый автомобиль. Рекомендую!",
      date: "3 недели назад"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/3f342218-6782-47bb-81a0-c0e211eeba48.jpg" 
              alt="ДОР-авто" 
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">ДОР-авто</h1>
              <p className="text-sm text-primary-foreground/80">Профессиональный автосервис</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-accent transition-colors">О нас</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>

          <button 
            className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/20 shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                onClick={() => handleMenuClick('about')} 
                className="hover:text-accent transition-colors py-2 cursor-pointer"
              >
                О нас
              </a>
              <a 
                onClick={() => handleMenuClick('services')} 
                className="hover:text-accent transition-colors py-2 cursor-pointer"
              >
                Услуги
              </a>
              <a 
                onClick={() => handleMenuClick('reviews')} 
                className="hover:text-accent transition-colors py-2 cursor-pointer"
              >
                Отзывы
              </a>
              <a 
                onClick={() => handleMenuClick('contacts')} 
                className="hover:text-accent transition-colors py-2 cursor-pointer"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Надежный сервис для вашего автомобиля
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Профессиональный ремонт и обслуживание всех марок автомобилей
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              О нашем автосервисе
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">ДОР-авто</strong> — это команда профессионалов с многолетним опытом работы в сфере автосервиса. Мы предоставляем полный спектр услуг по техническому обслуживанию и ремонту автомобилей любых марок.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наш автосервис оснащен современным диагностическим оборудованием, что позволяет быстро и точно определять неисправности. Мы используем только качественные запчасти и расходные материалы.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Гарантируем высокое качество работ, прозрачное ценообразование и индивидуальный подход к каждому клиенту.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">лет опыта</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                    <p className="text-sm text-muted-foreground">довольных клиентов</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-accent mb-2">12</div>
                    <p className="text-sm text-muted-foreground">опытных мастеров</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">гарантия качества</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale transition-all duration-300 hover:shadow-lg border-2 hover:border-accent/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{review.text}</p>
                  <p className="text-sm text-muted-foreground/70">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Адрес:</p>
                      <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 25</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Телефон:</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Режим работы:</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email:</p>
                      <p className="text-muted-foreground">info@dor-avto.ru</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Записаться на ремонт</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Марка автомобиля"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Описание проблемы"
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/3f342218-6782-47bb-81a0-c0e211eeba48.jpg" 
              alt="ДОР-авто" 
              className="h-10 w-10 rounded-full"
            />
            <p className="text-lg font-semibold">ДОР-авто</p>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 ДОР-авто. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;