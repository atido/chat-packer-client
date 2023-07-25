import Chat from "../components/Chat";
import Header from "../components/Header";
import "./HomePage.css";

export default function HomePage() {
  return (
    <section className="homepage">
      <div className="container">
        <Header />
        <main className="main">
          <Chat />
        </main>
      </div>
    </section>
  );
}
