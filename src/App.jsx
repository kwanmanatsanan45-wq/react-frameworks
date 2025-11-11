import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  const data = [
    { key: 1, icon: "🔈", title: "sound", description: "Audio equipment" },
    { key: 2, icon: "💻", title: "laptop", description: "portable computer" },
    { key: 3, icon: "🎮", title: "game", description: "Things to enjoy" },
    { key: 4, icon: "📷", title: "camera", description: "take a photo" },
    { key: 5, icon: "💿", title: "cd", description: "Memory card" },
    { key: 6, icon: "📁", title: "folder", description: "Collect some information" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to My Website</h2>
            <p className="text-xl mb-8">We provide the best solutions for your business</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service</h2>
              <p className="text-gray-600 text-lg">Everything you need for success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.map((item) => (
                <Card
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
