import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import AIChatbot from "./components/aiChatbot/AIChatbot";

function App() {
  return (
    <div>
      <Main />
      <AIChatbot />
    </div>
  );
}

export default App;
