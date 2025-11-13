# AI Portfolio Assistant

## Overview

This portfolio includes an intelligent AI-powered chatbot assistant that helps visitors learn about your skills, experience, projects, and background. The chatbot appears as a floating button in the bottom-right corner of the website.

## Features

✨ **Smart & Context-Aware**
- Understands questions about skills, experience, projects, education, and contact information
- Provides relevant, helpful responses tailored to your portfolio

🎨 **Modern Design**
- Beautiful, responsive interface
- Smooth animations and transitions
- Dark mode support
- Mobile-friendly

🤖 **Flexible AI Integration**
- Works out-of-the-box with local rule-based responses (no API key needed)
- Optional integration with OpenAI (GPT-3.5/GPT-4)
- Optional integration with Anthropic Claude
- Graceful fallback to local responses if API fails

💬 **User-Friendly**
- Quick action buttons for common questions
- Typing indicators
- Message timestamps
- Conversation history

## Quick Start

The chatbot works immediately after installation with intelligent local responses. No configuration required!

### Default Setup (Local Responses)

The chatbot is already integrated and will use rule-based responses to answer common questions about your portfolio.

### Optional: Enable External AI APIs

For more advanced, natural language understanding, you can integrate with OpenAI or Anthropic:

#### Option 1: OpenAI Integration

1. Get an API key from [OpenAI Platform](https://platform.openai.com/api-keys)

2. Create/edit `.env` file in the project root:
```bash
cp env.example .env
```

3. Add your configuration:
```env
REACT_APP_AI_PROVIDER=openai
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

4. Restart your development server:
```bash
npm start
```

#### Option 2: Anthropic Claude Integration

1. Get an API key from [Anthropic Console](https://console.anthropic.com/)

2. Create/edit `.env` file:
```bash
cp env.example .env
```

3. Add your configuration:
```env
REACT_APP_AI_PROVIDER=anthropic
REACT_APP_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

4. Restart your development server:
```bash
npm start
```

## Customization

### Modifying Responses

To customize the chatbot's responses, edit:
- **Local responses**: `src/components/aiChatbot/AIChatbot.js` → `generateContextualResponse()`
- **AI context**: `src/services/aiService.js` → `getPortfolioContext()`

### Styling

Customize the chatbot's appearance by editing:
`src/components/aiChatbot/AIChatbot.scss`

Key style variables:
- Colors use `$buttonColor` from `src/_globalColor.scss`
- Modify `.chat-window` for size and position
- Adjust `.message` classes for message styling
- Change `.chat-toggle-button` for the floating button

### Quick Actions

Edit the quick action buttons in `AIChatbot.js`:

```javascript
<div className="quick-actions">
  <button onClick={() => setInputMessage("Your custom question")}>
    Custom Button
  </button>
</div>
```

## Component Structure

```
src/
├── components/
│   └── aiChatbot/
│       ├── AIChatbot.js       # Main chatbot component
│       └── AIChatbot.scss     # Chatbot styles
├── services/
│   └── aiService.js           # AI API integration service
└── App.js                     # Chatbot integrated here
```

## Features Breakdown

### 1. Floating Chat Button
- Appears in bottom-right corner
- Animated pulse effect
- Transforms to X when chat is open
- Fully responsive on mobile

### 2. Chat Interface
- Header with status indicator
- Scrollable message area
- User and bot messages styled differently
- Typing indicators
- Message timestamps

### 3. Input System
- Auto-expanding textarea
- Send button with hover effects
- Enter key to send (Shift+Enter for new line)
- Input validation

### 4. Quick Actions
- Pre-defined question buttons
- Helps users discover what they can ask
- Customizable and scrollable on mobile

### 5. Context-Aware Responses
The chatbot understands queries about:
- 👨‍💻 Skills & Technologies
- 💼 Work Experience
- 🚀 Projects
- 🎓 Education & Certifications
- 🏆 Achievements
- 📧 Contact Information

## API Integration Details

### OpenAI Configuration

When configured, the chatbot uses:
- Model: `gpt-3.5-turbo` (configurable)
- Max tokens: 300
- Temperature: 0.7
- System context with portfolio information

### Anthropic Configuration

When configured, the chatbot uses:
- Model: `claude-3-sonnet-20240229` (configurable)
- Max tokens: 300
- System context with portfolio information

### Fallback Behavior

If API calls fail or no API key is configured:
- Automatically falls back to local responses
- No error messages shown to users
- Seamless experience maintained

## Mobile Responsiveness

The chatbot adapts to different screen sizes:

- **Desktop**: Fixed size chat window (380px × 600px)
- **Tablet**: Adjusts to screen width with max-width
- **Mobile**: Full-width chat interface, optimized for touch

## Performance Considerations

- Chatbot lazy loads (only impacts performance when opened)
- Messages stored in component state (resets on page refresh)
- Smooth animations use CSS transforms for better performance
- Scroll behavior optimized with refs

## Browser Support

✅ Chrome, Firefox, Safari, Edge (latest versions)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
⚠️ IE11 not supported (uses modern React features)

## Troubleshooting

### Chatbot doesn't appear
- Check that `AIChatbot` is imported in `App.js`
- Verify component files exist in `src/components/aiChatbot/`
- Check browser console for errors

### API responses not working
- Verify API key is correctly set in `.env`
- Check `.env` file is in project root (not `/src`)
- Restart development server after changing `.env`
- Check API key has sufficient credits/quota

### Styling issues
- Ensure `_globalColor.scss` exists and exports `$buttonColor`
- Check for CSS conflicts with other components
- Try clearing browser cache

### Mobile display issues
- Verify viewport meta tag in `public/index.html`
- Test in browser's responsive mode
- Check for CSS `z-index` conflicts

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit `.env` file**: Always keep API keys in `.env` and add it to `.gitignore`

2. **Client-side API keys**: When using API keys in React (client-side), they are exposed in the browser. For production:
   - Consider using a backend proxy server
   - Implement rate limiting
   - Monitor API usage
   - Use API key restrictions (domain whitelist, etc.)

3. **Alternative approach**: For better security, create a backend API that:
   - Stores API keys securely on server
   - Handles all AI API calls
   - Implements authentication and rate limiting
   - React app calls your backend instead of AI APIs directly

## Future Enhancements

Potential additions:
- [ ] Conversation history persistence (localStorage)
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] File upload for resume/documents
- [ ] Integration with contact form
- [ ] Analytics tracking for popular questions
- [ ] Admin panel for training responses

## Support

For issues or questions about the AI chatbot:
1. Check this documentation
2. Review component code and comments
3. Check browser console for errors
4. Verify environment variables are set correctly

## License

This AI chatbot component is part of the DeveloperFolio portfolio template and follows the same license.

---

**Enjoy your AI-powered portfolio assistant! 🤖✨**
