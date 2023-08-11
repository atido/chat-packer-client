export function formatMessageForConversation(message) {
  return { body: { role: 'user', content: message }, component: 'thread', id: crypto.randomUUID() };
}
