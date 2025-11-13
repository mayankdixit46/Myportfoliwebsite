import React, { useState, useRef, useEffect } from 'react';
import './AIChatbot.scss';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const AIChatbot = ({ portfolioData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help answer questions about this portfolio, skills, experience, and projects. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateContextualResponse = (userMessage) => {
    const messageLower = userMessage.toLowerCase();

    // Skills related queries
    if (messageLower.includes('skill') || messageLower.includes('technology') || messageLower.includes('tech stack')) {
      return `I have expertise in various technologies including JavaScript, React, Node.js, Python, and more. I'm passionate about full-stack development and continuously learning new technologies. Would you like to know about any specific technology or skill?`;
    }

    // Experience related queries
    if (messageLower.includes('experience') || messageLower.includes('work') || messageLower.includes('job')) {
      return `I have professional experience working on various projects involving web development, mobile applications, and backend systems. My work focuses on creating scalable and efficient solutions. Check out the experience section for detailed information about my roles and responsibilities.`;
    }

    // Projects related queries
    if (messageLower.includes('project')) {
      return `I've worked on several interesting projects ranging from web applications to open-source contributions. Each project showcases different aspects of my skills. You can find detailed information about my projects in the projects section of this portfolio. Is there a specific type of project you'd like to know more about?`;
    }

    // Education related queries
    if (messageLower.includes('education') || messageLower.includes('degree') || messageLower.includes('university') || messageLower.includes('college')) {
      return `I have a strong educational background in computer science and software engineering. You can find details about my academic qualifications in the education section. Would you like to know more about my certifications or courses?`;
    }

    // Contact related queries
    if (messageLower.includes('contact') || messageLower.includes('reach') || messageLower.includes('email') || messageLower.includes('hire')) {
      return `I'd love to connect with you! You can reach out through the contact section at the bottom of this portfolio. I'm available via email, LinkedIn, and GitHub. Feel free to get in touch for collaborations, opportunities, or just to chat about technology!`;
    }

    // Achievements related queries
    if (messageLower.includes('achievement') || messageLower.includes('award') || messageLower.includes('certification')) {
      return `I've earned several certifications and achievements throughout my career. These include industry-recognized certifications, hackathon wins, and notable contributions to open-source projects. Check out the achievements section for more details!`;
    }

    // General greetings
    if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
      return `Hello! Great to meet you! I'm here to help you explore this portfolio. Feel free to ask me about skills, experience, projects, education, or how to get in touch. What would you like to know?`;
    }

    // Thanks
    if (messageLower.includes('thank') || messageLower.includes('thanks')) {
      return `You're very welcome! If you have any more questions about the portfolio or would like to know anything else, just ask. I'm here to help! 😊`;
    }

    // Default response
    return `That's an interesting question! While I can provide general information about this portfolio, you might want to explore the different sections for detailed information. I can help you with questions about:

• Skills and technologies
• Work experience
• Projects and contributions
• Education and certifications
• Contact information

What would you like to know more about?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateContextualResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="ai-chatbot-container">
      {/* Floating Chat Button */}
      <button
        className={`chat-toggle-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-content">
              <FaRobot className="chat-header-icon" />
              <div>
                <h3>AI Portfolio Assistant</h3>
                <span className="status-indicator">● Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot-message">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-container">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask me anything about this portfolio..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
            />
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button onClick={() => setInputMessage("Tell me about your skills")}>
              Skills
            </button>
            <button onClick={() => setInputMessage("What's your experience?")}>
              Experience
            </button>
            <button onClick={() => setInputMessage("Show me your projects")}>
              Projects
            </button>
            <button onClick={() => setInputMessage("How can I contact you?")}>
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
