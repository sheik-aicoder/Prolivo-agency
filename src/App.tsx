import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Bot, 
  Cpu, 
  CheckCircle, 
  Star, 
  Users, 
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Palette,
  Lightbulb,
  Shield,
  TrendingUp,
  Clock,
  Award,
  Target,
  Rocket,
  BarChart3,
  Settings,
  Brain,
  Workflow
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('automation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Automation - Enterprise',
    message: '',
    budget: '$50,000+'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert(`Thank you ${formData.name}! We'll contact you within 24 hours to discuss your ${formData.service} requirements.`);
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelection = (plan: string, price: string) => {
    setFormData({
      ...formData,
      service: `AI Automation - ${plan}`,
      message: `I'm interested in the ${plan} plan (${price}). Please contact me to discuss implementation details and timeline.`
    });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Prolivo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Why Prolivo</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-medium">Trusted by Fortune 500 Companies</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Enterprise AI Automation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block"> That Scales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your enterprise operations with cutting-edge AI automation solutions. 
              We deliver custom AI systems that reduce costs by 60%, increase efficiency by 300%, 
              and provide measurable ROI within 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Schedule Strategy Call
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-3"
              >
                View Solutions
                <BarChart3 className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">300%</div>
                <div className="text-gray-600">Efficiency Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">60%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">90</div>
                <div className="text-gray-600">Days to ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">AI Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Enterprise AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformation services designed for enterprise-scale operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Workflow className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Process Automation</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">End-to-end automation of complex business processes using advanced AI, machine learning, and intelligent workflow orchestration.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>Intelligent document processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>Predictive analytics integration</span>
                </li>
              </ul>
            </div>
            
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Strategy & Consulting</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Strategic AI implementation roadmaps, technology assessment, and executive-level consulting for digital transformation.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>AI readiness assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>Technology stack optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span>ROI measurement frameworks</span>
                </li>
              </ul>
            </div>
            
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300 border border-green-200">
              <div className="bg-gradient-to-r from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom AI Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Bespoke AI solutions, machine learning models, and intelligent systems tailored to your specific business requirements.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>Custom ML model training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>API development & integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>Scalable cloud infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Enterprise AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable AI automation packages designed for enterprise transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="text-center mb-10">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$25,000</div>
                <p className="text-gray-600">Perfect for mid-size businesses</p>
                <div className="text-sm text-gray-500 mt-2">3-month implementation</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>AI chatbot & customer service automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Email & marketing automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Basic analytics dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>6 months support & training</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelection('Starter', '$25,000')}
                className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-3xl p-10 border-2 border-blue-500 relative transform scale-105 hover:scale-110 transition-transform shadow-2xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Star className="h-4 w-4" />
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-10">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">$75,000</div>
                <p className="text-gray-600">Best for growing enterprises</p>
                <div className="text-sm text-gray-500 mt-2">6-month implementation</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Advanced AI workflow automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Multi-channel AI integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Custom ML model development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Predictive analytics & reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>API integrations & custom connectors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>12 months premium support</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelection('Professional', '$75,000')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold text-lg"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="text-center mb-10">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-5xl font-bold text-purple-600 mb-2">$200,000+</div>
                <p className="text-gray-600">Complete AI transformation</p>
                <div className="text-sm text-gray-500 mt-2">12+ month implementation</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Complete AI ecosystem transformation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Advanced machine learning & AI research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>White-label AI solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Dedicated AI team & account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>24/7 enterprise support & monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Custom SLA & performance guarantees</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelection('Enterprise', '$200,000+')}
                className="w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-colors font-semibold text-lg"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">All plans include comprehensive training, documentation, and ongoing optimization</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation services beyond AI automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-transparent hover:border-blue-200">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Development</h3>
              <p className="text-gray-600 mb-4">Custom enterprise applications and scalable web solutions</p>
              <p className="text-sm font-semibold text-blue-600">Starting at $50,000</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 transition-all duration-300 border border-transparent hover:border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise UX/UI</h3>
              <p className="text-gray-600 mb-4">Premium design systems and user experience optimization</p>
              <p className="text-sm font-semibold text-purple-600">Starting at $25,000</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition-all duration-300 border border-transparent hover:border-green-200">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Strategy</h3>
              <p className="text-gray-600 mb-4">Comprehensive digital transformation roadmaps</p>
              <p className="text-sm font-semibold text-green-600">Starting at $15,000</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border border-transparent hover:border-orange-200">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Consulting</h3>
              <p className="text-gray-600 mb-4">C-level strategic consulting and technology advisory</p>
              <p className="text-sm font-semibold text-orange-600">$2,500/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Enterprise Leaders Choose Prolivo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just consultants. We're your strategic partners in AI-driven transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Enterprise Results</h3>
              <p className="text-gray-600 leading-relaxed">Our AI solutions have generated over $500M in measurable value for Fortune 500 clients, with average ROI of 400% within the first year.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Recognition</h3>
              <p className="text-gray-600 leading-relaxed">Recognized as a leading AI automation provider by Gartner, with certifications from Google Cloud, AWS, and Microsoft Azure.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">SOC 2 Type II certified with enterprise-grade security, compliance frameworks, and 99.99% uptime SLA guarantees.</p>
            </div>
          </div>

          <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500M+</div>
                <div className="text-gray-600">Value Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a strategic consultation to discuss your AI automation requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Enterprise Sales</p>
                    <p className="text-gray-600">sheikabdul2026@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Direct Line</p>
                    <p className="text-gray-600">+91 8760 92576</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Response Time</p>
                    <p className="text-gray-600">Within 4 business hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>30-minute strategic consultation call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Custom AI automation roadmap</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>ROI projections and timeline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>No-obligation proposal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-10 rounded-3xl border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Business Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Company Name *</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Service Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option>AI Automation - Starter</option>
                      <option>AI Automation - Professional</option>
                      <option>AI Automation - Enterprise</option>
                      <option>Custom AI Development</option>
                      <option>AI Strategy Consulting</option>
                      <option>Enterprise Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Project Budget</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $250,000</option>
                      <option>$250,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Project Details</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your automation goals, current challenges, and expected outcomes..."
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl hover:shadow-lg transition-all font-semibold text-lg"
                >
                  Schedule Strategic Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold">Prolivo</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">Transforming enterprises through intelligent automation and cutting-edge AI solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Process Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Strategy Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom AI Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Integration</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Starter Package</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Professional Package</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Package</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Prolivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-400">
            <p>&copy; 2025 Prolivo. All rights reserved. | Enterprise AI Automation Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;