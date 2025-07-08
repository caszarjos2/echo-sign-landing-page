import { useState, useEffect } from 'react';
import { ChevronDown, Smartphone, Users, Heart, Globe, Clock, CheckCircle, Star, Menu, X } from 'lucide-react';

const EchoSignsLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: "430M+", label: "Personas con discapacidad auditiva" },
        { number: "85%", label: "Precisión en traducción" },
        { number: "<400ms", label: "Latencia en tiempo real" },
        { number: "200+", label: "Lenguajes de señas disponibles" }
    ];

    const features = [
        {
            icon: <Smartphone className="w-8 h-8 text-blue-400" />,
            title: "Traducción en Tiempo Real",
            description: "Captura gestos y señas con tu cámara y tradúcelos instantáneamente a texto con IA avanzada."
        },
        {
            icon: <Users className="w-8 h-8 text-green-400" />,
            title: "Comunicación Bidireccional",
            description: "Facilita conversaciones naturales entre personas sordas y oyentes sin barreras."
        },
        {
            icon: <Heart className="w-8 h-8 text-red-400" />,
            title: "Conexión Familiar",
            description: "Ayuda a padres oyentes a comunicarse eficazmente con sus hijos sordos desde el primer día."
        },
        {
            icon: <Globe className="w-8 h-8 text-purple-400" />,
            title: "Acceso Universal",
            description: "Disponible en cualquier lugar: hospitales, aulas, oficinas y espacios sociales."
        }
    ];

    const benefits = [
        "Elimina la necesidad de intérpretes permanentes",
        "Reduce costos de $30-60 USD por hora",
        "Mejora la autonomía e inclusión social",
        "Facilita el aprendizaje temprano en niños",
        "Funciona sin conexión a internet",
        "Interface intuitiva y accesible"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <img src='src\images\echosign-logo.png' />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                EchoSigns
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="hover:text-blue-400 transition-colors">Características</a>
                            <a href="#stats" className="hover:text-blue-400 transition-colors">Estadísticas</a>
                            <a href="#benefits" className="hover:text-blue-400 transition-colors">Beneficios</a>
                            <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-md">
                        <div className="px-4 py-2 space-y-2">
                            <a href="#features" className="block py-2 hover:text-blue-400 transition-colors">Características</a>
                            <a href="#stats" className="block py-2 hover:text-blue-400 transition-colors">Estadísticas</a>
                            <a href="#benefits" className="block py-2 hover:text-blue-400 transition-colors">Beneficios</a>
                            <a href="#contact" className="block py-2 hover:text-blue-400 transition-colors">Contacto</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                                    Rompe las Barreras
                                    <br />
                                    <span className="text-3xl md:text-5xl lg:text-6xl">de la Comunicación</span>
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                                    EchoSigns traduce el lenguaje de señas en tiempo real usando inteligencia artificial,
                                    conectando personas sordas y oyentes de manera natural e instantánea.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                    Descargar App
                                </button>
                                <a className="border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm" href='https://www.youtube.com/watch?v=vnHcy1mLitc'>
                                    Ver Demo
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                                <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Simulated phone interface */}
                                    <div className="w-4/5 h-4/5 bg-white/10 rounded-2xl backdrop-blur-sm ">
                                        <img src='src\images\echosign-mobil.png' />
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 blur-xl"></div>
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 blur-xl"></div>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold">85% Precisión</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold">&lt;400ms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="animate-bounce">
                            <ChevronDown className="w-8 h-8 mx-auto text-white/60" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Características Revolucionarias
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Tecnología de vanguardia que transforma la comunicación para millones de personas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Beneficios que Transforman Vidas
                            </h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <Star className="w-8 h-8 text-yellow-400" />
                                    <div>
                                        <div className="text-2xl font-bold">85%</div>
                                        <div className="text-gray-300">Precisión en traducción</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Clock className="w-8 h-8 text-blue-400" />
                                    <div>
                                        <div className="text-2xl font-bold">&lt;400ms</div>
                                        <div className="text-gray-300">Latencia en tiempo real</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border border-blue-500/20">
                                    <p className="text-center text-lg font-semibold text-blue-300">
                                        "Conectando familias, eliminando barreras"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        El Problema que Resolvemos
                    </h2>
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            Más del 90% de los niños sordos nacen de padres oyentes que nunca han aprendido señas.
                            Esta brecha comunicativa genera frustración, retrasos en el aprendizaje y aislamiento social.
                        </p>
                        <p className="text-lg text-gray-400">
                            EchoSigns elimina estas barreras, permitiendo comunicación natural e instantánea
                            entre personas sordas y oyentes, transformando vidas y fortaleciendo vínculos familiares.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mobile App Preview Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Experiencia Móvil Perfecta
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Diseñada para ser intuitiva y accesible en cualquier dispositivo
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Phone 1 - Camera View */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                                        {/* Status bar */}
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-between px-6 text-white text-xs">
                                            <span>9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Main content */}
                                        <div className="pt-8 px-4 h-full flex flex-col">
                                            <div className="text-center mb-4">
                                                <h3 className="text-white font-semibold">Captura de Señas</h3>
                                            </div>

                                            <div className="flex-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl mb-4 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Smartphone className="w-16 h-16 text-white/80 mx-auto mb-2" />
                                                    <p className="text-white/60 text-sm">Cámara activa</p>
                                                </div>
                                            </div>

                                            <div className="bg-white/10 rounded-2xl p-4 mb-4">
                                                <p className="text-white text-sm">
                                                    "Hola, ¿cómo estás hoy?"
                                                </p>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                                    <div className="w-8 h-8 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 2 - Translation View */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                                        {/* Status bar */}
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-between px-6 text-white text-xs">
                                            <span>9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Main content */}
                                        <div className="pt-8 px-4 h-full flex flex-col">
                                            <div className="text-center mb-4">
                                                <h3 className="text-white font-semibold">Traducción en Tiempo Real</h3>
                                            </div>

                                            <div className="flex-1 space-y-4">
                                                <div className="bg-blue-600/80 rounded-2xl p-4">
                                                    <p className="text-white text-sm">¡Hola! ¿Cómo estás?</p>
                                                    <span className="text-blue-200 text-xs">Traducido • 85% precisión</span>
                                                </div>

                                                <div className="bg-purple-600/80 rounded-2xl p-4">
                                                    <p className="text-white text-sm">Muy bien, gracias por preguntar</p>
                                                    <span className="text-purple-200 text-xs">Traducido • 92% precisión</span>
                                                </div>

                                                <div className="bg-green-600/80 rounded-2xl p-4">
                                                    <p className="text-white text-sm">¿Quieres tomar un café?</p>
                                                    <span className="text-green-200 text-xs">Traducido • 88% precisión</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-center space-x-4">
                                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <Users className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                                    <Heart className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 3 - Settings View */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                                        {/* Status bar */}
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-between px-6 text-white text-xs">
                                            <span>9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Main content */}
                                        <div className="pt-8 px-4 h-full flex flex-col">
                                            <div className="text-center mb-6">
                                                <h3 className="text-white font-semibold">Configuración</h3>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="bg-white/10 rounded-2xl p-4">
                                                    <div className="flex items-center space-x-3">
                                                        <Globe className="w-6 h-6 text-blue-400" />
                                                        <div>
                                                            <p className="text-white text-sm font-medium">Idioma de Señas</p>
                                                            <p className="text-gray-400 text-xs">ASL (American Sign Language)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/10 rounded-2xl p-4">
                                                    <div className="flex items-center space-x-3">
                                                        <Clock className="w-6 h-6 text-green-400" />
                                                        <div>
                                                            <p className="text-white text-sm font-medium">Velocidad</p>
                                                            <p className="text-gray-400 text-xs">Tiempo real (&lt;400ms)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/10 rounded-2xl p-4">
                                                    <div className="flex items-center space-x-3">
                                                        <Star className="w-6 h-6 text-yellow-400" />
                                                        <div>
                                                            <p className="text-white text-sm font-medium">Precisión</p>
                                                            <p className="text-gray-400 text-xs">85% en promedio</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex items-end">
                                                <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-center">
                                                    <p className="text-white font-semibold">Modo Offline</p>
                                                    <p className="text-white/80 text-xs">Disponible</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Únete a la Revolución
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Sé parte del cambio que está transformando la comunicación para millones de personas en todo el mundo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            Descargar Ahora
                        </button>
                        <button className="border border-white/30 hover:border-white/50 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm">
                            Solicitar Demo
                        </button>
                    </div>

                    <p className="text-sm text-gray-400">
                        Disponible para iOS y Android • Gratis para usuarios individuales
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-sm font-bold">ES</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                EchoSigns
                            </span>
                        </div>

                        <div className="flex space-x-6 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos</a>
                            <a href="#" className="hover:text-white transition-colors">Soporte</a>
                            <a href="#" className="hover:text-white transition-colors">Contacto</a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
                        <p>&copy; 2025 EchoSigns. Todos los derechos reservados. Transformando la comunicación, conectando corazones.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EchoSignsLanding;