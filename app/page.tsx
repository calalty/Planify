import { Board } from "../components/Board";
import { Header } from "../components/Header";

export default async function Home() {
  return (
    <main>
      <Header />
      <Board />
    </main>
  );
}
