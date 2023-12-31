import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { formatMessageForConversation } from '../utils/conversation';
import myaxios from '../utils/myaxios';
import './Chat.css';
import DynamicComponent from './DynamicComponent';
import MessageLoader from './loader/MessageLoader';
import PageLoader from './loader/PageLoader';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const textAreaRef = useRef(null);
  const isMessageInputEmpty = message.trim() === '';

  const sendEvent = event => {
    myaxios
      .post(`/api/chat/events`, event)
      .then(response => {
        localStorage.setItem('sessionToken', response.data.sessionToken);
        setConversation(response.data.conversation);
      })
      .catch(err => setErrorMessage(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    sendEvent({ type: 'INIT' });
  }, []);

  useEffect(() => {
    if (textAreaRef.current) {
      if (!message) {
        textAreaRef.current.style.height = textAreaRef.current.style.minHeight;
      } else {
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
      }
    }
  }, [message]);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!isMessageInputEmpty) handleSubmit();
    }
  };

  const handleSubmit = async e => {
    if (e) e.preventDefault();
    setConversation([...conversation, formatMessageForConversation(message)]);
    setIsLoading(true);
    setMessage('');
    setErrorMessage('');
    sendEvent({ type: 'MESSAGE', message });
  };

  return (
    <>
      {conversation.length > 0 || errorMessage ? (
        <>
          <div className="chat">
            <ScrollToBottom className="chat__container" followButtonClassName="btn-scroll-to-bottom">
              {conversation.length > 0 && conversation.map(el => <DynamicComponent key={el.id} element={el} />)}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </ScrollToBottom>
          </div>
          <div className="chat__footer">
            <form onSubmit={handleSubmit} className="chat__input-zone">
              <div className="chat__message-zone">
                <textarea
                  className="chat__message"
                  ref={textAreaRef}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  cols="1"
                  placeholder="Send a message"
                  style={{ height: '24px', minHeight: '24px' }}
                />

                {!isLoading ? (
                  <button
                    type="submit"
                    disabled={isMessageInputEmpty}
                    className={`chat__submit-btn btn btn--primary ${isMessageInputEmpty ? 'btn--disabled' : ''}`}
                  >
                    <Icon className="chat__submit-icon" icon="fe:paper-plane" />
                  </button>
                ) : (
                  <MessageLoader />
                )}
              </div>
            </form>
          </div>
        </>
      ) : (
        <PageLoader />
      )}
    </>
  );
}
