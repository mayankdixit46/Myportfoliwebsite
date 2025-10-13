import React, {useState, useRef, useEffect} from "react";
import "./Chatbot.scss";
import {
  greeting,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  socialMediaLinks
} from "../../portfolio";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: `Hi! I'm Mayank's virtual assistant. Ask me about his skills, experience, education, projects, or how to contact him!`,
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBotResponse = userInput => {
    const input = userInput.toLowerCase();

    // Skills
    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech stack")
    ) {
      const skills = skillsSection.softwareSkills
        .map(s => s.skillName)
        .join(", ");
      return `Mayank's technical skills include: ${skills}. He specializes in ${skillsSection.subTitle}`;
    }

    // Experience
    if (
      input.includes("experience") ||
      input.includes("work") ||
      input.includes("job") ||
      input.includes("company")
    ) {
      if (input.includes("pega") || input.includes("current")) {
        const pegaExp = workExperiences.experience.find(
          e => e.company === "Pegasystems Inc."
        );
        return `Currently, Mayank works as ${pegaExp.role} at ${pegaExp.company} (${pegaExp.date}). ${pegaExp.desc}`;
      }
      if (input.includes("zeta")) {
        const zetaExp = workExperiences.experience.find(
          e => e.company === "Zeta Global"
        );
        return `Mayank worked as ${zetaExp.role} at ${zetaExp.company} (${zetaExp.date}). ${zetaExp.desc}`;
      }
      const expSummary = workExperiences.experience
        .map(e => `${e.role} at ${e.company} (${e.date})`)
        .join("\n\n");
      return `Here's Mayank's work experience:\n\n${expSummary}`;
    }

    // Education
    if (
      input.includes("education") ||
      input.includes("degree") ||
      input.includes("college") ||
      input.includes("university")
    ) {
      const school = educationInfo.schools[0];
      return `Mayank earned his ${school.subHeader} from ${school.schoolName} (${school.duration}).`;
    }

    // Projects
    if (input.includes("project") || input.includes("portfolio")) {
      const projects = bigProjects.projects
        .map(p => `${p.projectName}: ${p.projectDesc}`)
        .join("\n\n");
      return `Here are some of Mayank's major projects:\n\n${projects}`;
    }

    // Certifications
    if (
      input.includes("certification") ||
      input.includes("certificate") ||
      input.includes("achievement")
    ) {
      const certs = achievementSection.achievementsCards
        .map(a => `${a.title}: ${a.subtitle}`)
        .join("\n\n");
      return `Mayank's certifications include:\n\n${certs}`;
    }

    // Contact
    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("phone") ||
      input.includes("reach")
    ) {
      return `You can contact Mayank at:\n\nEmail: ${contactInfo.email_address}\nPhone: ${contactInfo.number}\n\nConnect on:\nLinkedIn: ${socialMediaLinks.linkedin}\nGitHub: ${socialMediaLinks.github}`;
    }

    // About/Who
    if (
      input.includes("who") ||
      input.includes("about") ||
      input.includes("tell me")
    ) {
      return `${greeting.subTitle}`;
    }

    // Resume
    if (input.includes("resume") || input.includes("cv")) {
      return `You can view Mayank's resume here: ${greeting.resumeLink}`;
    }

    // GitHub
    if (input.includes("github")) {
      return `Check out Mayank's GitHub profile: ${socialMediaLinks.github}`;
    }

    // LinkedIn
    if (input.includes("linkedin")) {
      return `Connect with Mayank on LinkedIn: ${socialMediaLinks.linkedin}`;
    }

    // Location/Available
    if (
      input.includes("location") ||
      input.includes("where") ||
      input.includes("available")
    ) {
      return `Mayank is based in India and can be reached at ${contactInfo.email_address} or ${contactInfo.number}.`;
    }

    // Default response
    return `I can help you learn about Mayank's:\n• Skills & technologies\n• Work experience\n• Education\n• Projects\n• Certifications\n• Contact information\n\nWhat would you like to know?`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {text: inputValue, isBot: false};
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = {text: getBotResponse(inputValue), isBot: true};
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <span className="chat-icon">💬</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Ask our AI anything</h3>
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.isBot ? "bot-message" : "user-message"
                }`}
              >
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your projects"
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
