
import React, { useState } from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { Car, Building2, Bot } from 'lucide-react';
import CarList from "@/components/CarList"; // adjust path if needed

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoMart Dealership</h1>
              <p className="text-sm text-gray-600">Your trusted car partner</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <Bot className="h-5 w-5" />
            <span className="text-sm font-medium">AI Assistant</span>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
<div className="max-w-4xl mx-auto px-4 py-8">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <ChatInterface />
  </div>
</div>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6" />
            <span className="text-lg font-semibold">AutoMart Dealership</span>
          </div>
          <p className="text-gray-400">Quality used cars with trusted service since 2010</p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <span>📞 +91-9876543210</span>
            <span>📧 info@automart.com</span>
            <span>📍 123 MG Road</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
