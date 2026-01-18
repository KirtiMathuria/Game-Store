import React from 'react'
import { Lock, Clock, Trophy } from 'lucide-react'

const Features = () => {
  // Game store features (Easy Refund removed)
  const features = [
    {
      icon: Trophy,
      title: 'Exclusive Games',
      subtitle: 'Access titles you won’t find anywhere else',
      color: 'bg-purple-800 text-purple-400',
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      subtitle: 'Safe and encrypted checkout',
      color: 'bg-blue-800 text-blue-400',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      subtitle: 'Dedicated gamer support anytime',
      color: 'bg-green-800 text-green-400',
    },
  ]

  return (
    <div className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">
          Why Gamers Choose Us
        </h2>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl
                           bg-white/5 transition transform 
                           hover:-translate-y-2 hover:scale-105 hover:bg-white/10"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${feature.color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
