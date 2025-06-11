import React, { useState, useRef, useEffect } from 'react';
import { Button, Input } from 'react-vant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { fetchDeepSeekResponse } from '../api/deepseek';
import ReactMarkdown from 'react-markdown'; // 新增
import '../styles/chat.css';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const ChatBox: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    setIsLoading(true);
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    try {
      const response = await fetchDeepSeekResponse(input);
      setMessages([...messages, { role: 'user', content: input }, { role: 'ai', content: response }]);
    } catch (error) {
      console.error('API 错误:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>ai对话</h1>
        <div className="status-indicator" />
      </div>

      <div className="chat-content" ref={chatRef}>
        {messages.length === 0 && (
          <div className="message ai-message">
            你好！我是 AI，有什么可以帮助你的吗？
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}>
            {msg.role === 'ai' ? (
              <ReactMarkdown>{msg.content}</ReactMarkdown> // 解析 AI 回复的 Markdown
            ) : (
              <p>{msg.content}</p> // 用户消息直接显示
            )}
          </div>
        ))}
        
        {isLoading && <div className="loading-indicator" />}
      </div>

      <div className="chat-input">
        <Input
          value={input}
          onChange={(value) => setInput(value)}
          placeholder="输入问题..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend} loading={isLoading}>
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faPaperPlane} />}
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;