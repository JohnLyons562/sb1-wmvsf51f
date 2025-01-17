import React from 'react';
import { Sprout, Search, GraduationCap, BriefcaseIcon, TrendingUp, ChevronRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkillSprout</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-teal-600">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">Browse Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">Student Sign-Up</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">Brand Sign-Up</a>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your College Experience into Real-World Opportunities
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              SkillSprout connects ambitious college students with brands looking for fresh talent. 
              Gain hands-on experience, build your portfolio, and get ready for the career you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition flex items-center justify-center">
                Start Building Your Portfolio
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition">
                Find Talented Students
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <GraduationCap className="h-12 w-12 text-teal-600" />,
                title: "Create Your Student Profile",
                description: "Build a professional profile showcasing your skills, projects, and academic experience."
              },
              {
                icon: <Search className="h-12 w-12 text-teal-600" />,
                title: "Browse Opportunities",
                description: "Explore real-world projects that match your field of study or post your skills for brands to find."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-teal-600" />,
                title: "Work & Grow",
                description: "Collaborate with real companies, gain hands-on experience, and build the portfolio that gets you hired."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Students Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Featured Students</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((student) => (
              <div key={student} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img 
                  src={`https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600`}
                  alt="Student"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Sarah Johnson</h3>
                  <p className="text-teal-600 mb-2">UI/UX Design • Web Development</p>
                  <p className="text-gray-600 mb-4">Stanford University</p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <button className="text-teal-600 hover:text-teal-700">View Profile →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Career?</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            SkillSprout helps students just like you gain real-world experience, build portfolios, 
            and land that dream job—before you even graduate.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition">
            Sign Up as a Student
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Sprout className="h-8 w-8 text-teal-500" />
                <span className="ml-2 text-xl font-bold text-white">SkillSprout</span>
              </div>
              <p className="text-gray-400">
                Empowering college students to gain real-world experience and build amazing portfolios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-500">How It Works</a></li>
                <li><a href="#" className="hover:text-teal-500">Browse Services</a></li>
                <li><a href="#" className="hover:text-teal-500">Student Sign-Up</a></li>
                <li><a href="#" className="hover:text-teal-500">Brand Sign-Up</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Instagram className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                <Linkedin className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                <Twitter className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                <Facebook className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;