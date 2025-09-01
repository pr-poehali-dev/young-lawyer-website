import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-law-light to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={28} className="text-law-blue" />
              <span className="text-xl font-montserrat font-bold text-law-blue">MakvolGroup</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-law-gray hover:text-law-blue transition-colors font-open-sans">Главная</a>
              <a href="#services" className="text-law-gray hover:text-law-blue transition-colors font-open-sans">Услуги</a>
              <a href="#about" className="text-law-gray hover:text-law-blue transition-colors font-open-sans">Обо мне</a>
              <a href="#contact" className="text-law-gray hover:text-law-blue transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-law-blue hover:bg-blue-700 text-white font-open-sans">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-law-blue mb-6 leading-tight">
              Молодой юрист<br />
              <span className="text-law-gray">для вашего бизнеса</span>
            </h1>
            <p className="text-xl text-law-gray mb-8 max-w-3xl mx-auto font-open-sans leading-relaxed">
              Современные юридические решения для стартапов и развивающегося бизнеса. 
              Регистрация, консультации, договоры — всё для вашего успеха.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-law-blue hover:bg-blue-700 text-white font-montserrat text-lg px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button variant="outline" size="lg" className="border-law-blue text-law-blue hover:bg-law-blue hover:text-white font-montserrat text-lg px-8 py-3">
                <Icon name="FileText" size={20} className="mr-2" />
                Мои услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-law-blue mb-4">Мои услуги</h2>
            <p className="text-xl text-law-gray font-open-sans">Полный спектр юридических услуг для развития вашего дела</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={32} className="text-law-blue" />
                </div>
                <CardTitle className="text-xl font-montserrat text-law-blue">Регистрация бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-law-gray font-open-sans text-center leading-relaxed">
                  Помогу оформить ООО, ИП, выбрать налоговый режим и подготовить все документы. 
                  Быстро, надёжно и с учётом всех нюансов.
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-montserrat font-bold text-law-blue">от 15 000 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-law-blue" />
                </div>
                <CardTitle className="text-xl font-montserrat text-law-blue">Юридические консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-law-gray font-open-sans text-center leading-relaxed">
                  Консультирую по корпоративному праву, трудовым отношениям, налогам. 
                  Онлайн и офлайн встречи в удобное время.
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-montserrat font-bold text-law-blue">от 3 000 ₽/час</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={32} className="text-law-blue" />
                </div>
                <CardTitle className="text-xl font-montserrat text-law-blue">Договоры и документы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-law-gray font-open-sans text-center leading-relaxed">
                  Составляю и проверяю договоры, учредительные документы, 
                  внутренние положения компании. Защищу ваши интересы.
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-montserrat font-bold text-law-blue">от 5 000 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-law-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-law-blue mb-6">Обо мне</h2>
              <div className="space-y-4 text-law-gray font-open-sans text-lg leading-relaxed">
                <p>
                  Привет! Я — молодой амбициозный юрист, специализирующийся на поддержке стартапов 
                  и развивающегося бизнеса. Окончил юридический факультет с красным дипломом.
                </p>
                <p>
                  Понимаю, как важно для предпринимателя получить качественную юридическую поддержку 
                  без переплат. Поэтому предлагаю современный подход: быстро, понятно и по справедливой цене.
                </p>
                <p>
                  Работаю с использованием цифровых технологий — большинство вопросов можем решить 
                  онлайн, экономя ваше время и деньги.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-law-blue">50+</div>
                  <div className="text-law-gray font-open-sans">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-law-blue">24/7</div>
                  <div className="text-law-gray font-open-sans">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/img/e9b808c6-8ab5-4cad-8384-37c232ae2c56.jpg" 
                  alt="Молодой юрист" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={24} className="text-law-blue" />
                  <div>
                    <div className="font-montserrat font-bold text-law-blue">Красный диплом</div>
                    <div className="text-sm text-law-gray font-open-sans">МГУ им. Ломоносова</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-law-blue mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-law-gray font-open-sans">Готов обсудить ваши задачи и предложить решение</p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-law-gray font-open-sans font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="border-gray-200" />
                  </div>
                  <div>
                    <label className="block text-law-gray font-open-sans font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="border-gray-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-law-gray font-open-sans font-medium mb-2">Email</label>
                  <Input placeholder="your@email.com" className="border-gray-200" />
                </div>
                <div>
                  <label className="block text-law-gray font-open-sans font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию или задачу..." 
                    rows={4} 
                    className="border-gray-200" 
                  />
                </div>
                <Button className="w-full bg-law-blue hover:bg-blue-700 text-white font-montserrat text-lg py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-law-gray text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={24} className="text-white" />
                <span className="text-xl font-montserrat font-bold">MakvolGroup</span>
              </div>
              <p className="text-gray-300 font-open-sans leading-relaxed">
                Современные юридические решения для вашего бизнеса. 
                Работаю честно, быстро и результативно.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 font-open-sans text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@yurkonsalt.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Центр</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Время работы</h3>
              <div className="space-y-1 font-open-sans text-gray-300">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="text-blue-300 mt-2">Экстренные консультации 24/7</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>© 2024 MakvolGroup. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;