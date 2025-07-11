
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start space-x-2`}>
      {isBot && (
        <div className="flex-shrink-0 bg-blue-600 p-2 rounded-full">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isBot 
          ? 'bg-white shadow-sm border' 
          : 'bg-blue-600 text-white'
      }`}>
        {isBot && message.content.includes('<img') ? (
          <div 
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: message.content }}
          />
        ) : (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        )}
        <p className={`text-xs mt-1 ${
          isBot ? 'text-gray-500' : 'text-blue-100'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 bg-gray-600 p-2 rounded-full">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
};
