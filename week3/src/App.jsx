import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/ui/layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';
import Card from './components/ui/card';
import Button from './components/ui/button';

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#tasks', label: 'Tasks' },
    { href: '#api-data', label: 'API Data' }
  ];

  return (
    <ThemeProvider>
      <Layout navbarLinks={navLinks}>
        {/* Hero Section */}
        <section id="home" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  PLP Task Manager
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  A modern task management application built with React and Tailwind CSS
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => scrollTo('tasks')}>
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => scrollTo('api-data')}>
                    View API Demo
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {[
                    { icon: '✅', title: 'Task Management', desc: 'Create and organize tasks efficiently' },
                    { icon: '💾', title: 'Local Storage', desc: 'Tasks persist between sessions' },
                    { icon: '📱', title: 'Responsive', desc: 'Works on all devices' }
                  ].map((feature, i) => (
                    <div key={i} className="space-y-3">
                      <div className="text-3xl">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Task Manager */}
        <TaskManager />

        {/* API Data */}
        <ApiData />

        {/* Tech Stack */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="text-center space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Built With</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { name: 'React', icon: '⚛️' },
                    { name: 'Tailwind CSS', icon: '🎨' },
                    { name: 'Vite', icon: '⚡' },
                    { name: 'REST API', icon: '🔗' }
                  ].map((tech, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-4xl">{tech.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;