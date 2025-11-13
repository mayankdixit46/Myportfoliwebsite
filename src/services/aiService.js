/**
 * AI Service for chatbot integration
 * Supports multiple AI providers: OpenAI, Anthropic Claude, etc.
 *
 * To enable API integration:
 * 1. Add your API key to .env file:
 *    REACT_APP_OPENAI_API_KEY=your_key_here
 *    OR
 *    REACT_APP_ANTHROPIC_API_KEY=your_key_here
 *
 * 2. Set the provider in .env:
 *    REACT_APP_AI_PROVIDER=openai (or 'anthropic' or 'local')
 */

const AI_PROVIDER = process.env.REACT_APP_AI_PROVIDER || 'local';
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const ANTHROPIC_API_KEY = process.env.REACT_APP_ANTHROPIC_API_KEY;

// Portfolio context that will be sent with each request
const getPortfolioContext = () => {
  return `You are an AI assistant for a developer's portfolio website. You help visitors learn about the developer's skills, experience, projects, and background.

Key information:
- Full Stack Developer with expertise in JavaScript, React, Node.js, Python
- Experience with web development, mobile applications, and backend systems
- Passionate about creating scalable and efficient solutions
- Open to collaborations and new opportunities

When answering questions:
- Be friendly and professional
- Keep responses concise but informative
- Encourage visitors to explore different sections of the portfolio
- Guide them to contact information if they're interested in connecting

Available portfolio sections:
- Skills & Technologies
- Work Experience
- Projects
- Education & Certifications
- Achievements
- Contact Information`;
};

/**
 * Call OpenAI API
 */
const callOpenAI = async (messages) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: getPortfolioContext() },
          ...messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};

/**
 * Call Anthropic Claude API
 */
const callAnthropic = async (messages) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 300,
        system: getPortfolioContext(),
        messages: messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        }))
      })
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
};

/**
 * Local fallback responses (rule-based)
 */
const getLocalResponse = (message) => {
  const messageLower = message.toLowerCase();

  if (messageLower.includes('skill') || messageLower.includes('technology') || messageLower.includes('tech stack')) {
    return `I have expertise in various technologies including JavaScript, React, Node.js, Python, and more. I'm passionate about full-stack development and continuously learning new technologies. Would you like to know about any specific technology or skill?`;
  }

  if (messageLower.includes('experience') || messageLower.includes('work') || messageLower.includes('job')) {
    return `I have professional experience working on various projects involving web development, mobile applications, and backend systems. My work focuses on creating scalable and efficient solutions. Check out the experience section for detailed information!`;
  }

  if (messageLower.includes('project')) {
    return `I've worked on several interesting projects ranging from web applications to open-source contributions. Each project showcases different aspects of my skills. You can find detailed information in the projects section. Is there a specific type of project you'd like to know more about?`;
  }

  if (messageLower.includes('education') || messageLower.includes('degree') || messageLower.includes('university') || messageLower.includes('college')) {
    return `I have a strong educational background in computer science and software engineering. You can find details about my academic qualifications in the education section. Would you like to know more about my certifications or courses?`;
  }

  if (messageLower.includes('contact') || messageLower.includes('reach') || messageLower.includes('email') || messageLower.includes('hire')) {
    return `I'd love to connect with you! You can reach out through the contact section at the bottom of this portfolio. I'm available via email, LinkedIn, and GitHub. Feel free to get in touch for collaborations, opportunities, or just to chat about technology!`;
  }

  if (messageLower.includes('achievement') || messageLower.includes('award') || messageLower.includes('certification')) {
    return `I've earned several certifications and achievements throughout my career. These include industry-recognized certifications, hackathon wins, and notable contributions to open-source projects. Check out the achievements section for more details!`;
  }

  if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
    return `Hello! Great to meet you! I'm here to help you explore this portfolio. Feel free to ask me about skills, experience, projects, education, or how to get in touch. What would you like to know?`;
  }

  if (messageLower.includes('thank') || messageLower.includes('thanks')) {
    return `You're very welcome! If you have any more questions about the portfolio or would like to know anything else, just ask. I'm here to help! 😊`;
  }

  return `That's an interesting question! I can help you with information about:

• Skills and technologies
• Work experience
• Projects and contributions
• Education and certifications
• Contact information

What would you like to know more about?`;
};

/**
 * Main function to get AI response
 * Automatically selects the appropriate provider based on configuration
 */
export const getAIResponse = async (message, conversationHistory = []) => {
  try {
    // Check if API keys are configured
    if (AI_PROVIDER === 'openai' && OPENAI_API_KEY) {
      return await callOpenAI([...conversationHistory, { sender: 'user', text: message }]);
    } else if (AI_PROVIDER === 'anthropic' && ANTHROPIC_API_KEY) {
      return await callAnthropic([...conversationHistory, { sender: 'user', text: message }]);
    } else {
      // Fall back to local responses
      return getLocalResponse(message);
    }
  } catch (error) {
    console.error('Error getting AI response:', error);
    // Fallback to local response on error
    return getLocalResponse(message);
  }
};

/**
 * Check if external AI API is configured and available
 */
export const isAIAPIConfigured = () => {
  return (AI_PROVIDER === 'openai' && OPENAI_API_KEY) ||
         (AI_PROVIDER === 'anthropic' && ANTHROPIC_API_KEY);
};

export default {
  getAIResponse,
  isAIAPIConfigured
};
