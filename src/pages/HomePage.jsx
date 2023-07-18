import Chat from "../components/Chat";
import Header from "../components/Header";
import "./HomePage.css";

export default function HomePage() {
  const conversationFromApi = [{ role: "assistant", content: "Hello I am a chat bot", id: "1" }];

  return (
    <section className="homepage">
      <div className="container">
        <Header />
        <main className="main">
          <Chat conversationFromApi={conversationFromApi} />
        </main>
      </div>
    </section>
  );
}
