import React from 'react';
import { Identity } from '../generator';
import { GlitchText } from './GlitchText';
import { MapPin, Briefcase, User, BarChart3 } from 'lucide-react';

interface IdCardProps {
  identity: Identity;
}

export function IdCard({ identity }: IdCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Info */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <User className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">Identity</span>
            </div>
            <GlitchText 
              text={identity.name} 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Profession</span>
              </div>
              <p className="text-lg font-semibold text-white font-mono">{identity.profession}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Location</span>
              </div>
              <p className="text-lg font-semibold text-white font-mono">{identity.location}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-3">
                <BarChart3 className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Stats</span>
              </div>
              <div className="space-y-2">
                {identity.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300 font-mono">{stat.name}:</span>
                    <span className="text-sm font-bold text-cyan-400 font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - ASCII Art */}
        <div className="lg:flex lg:items-center">
          <div className="bg-black p-4 rounded-lg border border-green-500/30 font-mono text-xs overflow-x-auto">
            <div className="text-green-400 whitespace-pre leading-tight">
              {identity.ascii}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}