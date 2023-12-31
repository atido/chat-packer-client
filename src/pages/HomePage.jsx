import { useContext, useEffect } from "react";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Confetti from "../components/confetti/Confetti";
import { AuthContext } from "../context/auth.context";
import "./HomePage.css";

export default function HomePage() {
  const { isEnd, setIsEnd } = useContext(AuthContext);

  useEffect(() => {
    setIsEnd(false);
  }, []);

  return (
    <section className="homepage">
      <Header />
      <div className="container">
        {isEnd && <Confetti />}
        <main className="main">
          <Chat />
        </main>
      </div>
    </section>
  );
}
