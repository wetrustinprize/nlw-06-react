import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";

import "../styles/auth.scss";

import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();

  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <button onClick={handleCreateRoom} className="create-room">
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
