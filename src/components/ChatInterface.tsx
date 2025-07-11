
import React, { useState, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { OptionButtons } from './OptionButtons';
import { ContactForm } from './ContactForm';
import { chatWorkflow, UserData, ChatStep } from '../data/chatWorkflow';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
  const [userData, setUserData] = useState<UserData>({});
  const [isShowingContactForm, setIsShowingContactForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Initialize with welcome message
    const welcomeConfig = chatWorkflow[currentStep];
    const welcomeMessage = typeof welcomeConfig.message === 'function' 
      ? welcomeConfig.message(userData) 
      : welcomeConfig.message;
    
    addBotMessage(welcomeMessage);
  }, []);

  const addBotMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionSelect = (optionId: string, optionText: string) => {
    // Add user message
    addUserMessage(optionText);

    const currentConfig = chatWorkflow[currentStep];
    let updatedUserData = { ...userData };
    
    // Update user data if needed
    if (currentConfig.updateUserData) {
      currentConfig.updateUserData(updatedUserData, optionId);
      setUserData(updatedUserData);
    }

    // Determine next step
    const nextStep = currentConfig.nextStep ? currentConfig.nextStep(optionId) : currentStep;
    
    if (nextStep === 'contact_form') {
      setIsShowingContactForm(true);
      return;
    }

    // Get next step configuration
    const nextStepConfig = chatWorkflow[nextStep];
    if (nextStepConfig) {
      setCurrentStep(nextStep);
      
      // Handle message - check if it's a function or string
      const botMessage = typeof nextStepConfig.message === 'function' 
        ? nextStepConfig.message(updatedUserData) 
        : nextStepConfig.message;
      
      setTimeout(() => {
        addBotMessage(botMessage);
      }, 1000);
    }
  };

  const handleContactSubmit = (contactData: any) => {
    const updatedUserData = { ...userData, ...contactData };
    setUserData(updatedUserData);
    setIsShowingContactForm(false);
    
    // Move to next step after contact form
    setCurrentStep('test_drive_location');
    
    setTimeout(() => {
      const nextConfig = chatWorkflow['test_drive_location'];
      const botMessage = typeof nextConfig.message === 'function' 
        ? nextConfig.message(updatedUserData) 
        : nextConfig.message;
      addBotMessage(botMessage);
    }, 1000);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      setInputValue('');
      
      // Simple echo response for now
      setTimeout(() => {
        addBotMessage("Thank you for your message. How else can I help you?");
      }, 1000);
    }
  };

  const currentConfig = chatWorkflow[currentStep];
  
  // Get options - either static or dynamic
  const getOptions = () => {
    if (currentConfig?.getDynamicOptions) {
      return currentConfig.getDynamicOptions(userData);
    }
    return currentConfig?.options || [];
  };

  const options = getOptions();
  const hasOptions = options && options.length > 0;

  return (
    <div className="flex flex-col h-[600px]">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
        <h2 className="text-lg font-semibold">Chat with our AI Assistant</h2>
        <p className="text-blue-100 text-sm">We're here to help you find your perfect car</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {/* Contact Form */}
        {isShowingContactForm && (
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        )}
        
        {/* Option Buttons */}
        {hasOptions && !isShowingContactForm && (
          <OptionButtons 
            options={options} 
            onSelect={handleOptionSelect}
          />
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <form onSubmit={handleInputSubmit} className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
