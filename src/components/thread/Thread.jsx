import ReactMarkdown from 'react-markdown';
import './Thread.css';

export default function Thread({ body, isError = false }) {
  return (
    <div className={`thread ${body.role == 'assistant' ? 'thread--assistant' : 'thread--user'} ${isError ? 'thread--error' : ''}`}>
      {body.role == 'assistant' && <img className="thread__avatar" src="avatar-assistant.png" alt="assistant avatar" />}
      <div className="thread__message">
        <ReactMarkdown>{body.content}</ReactMarkdown>
      </div>
    </div>
  );
}
