import Greet, { MyCompo, age, StudentComp } from "./components/MyCompo";
import TelguMoviesCard from "./components/TelguMoviesCard";
import { WelcomeCard } from "./components/welcomeCard";
import "./App.css";

function App() {
  return (
    <>
      <WelcomeCard
        name=" Telugu OG Movies Hub "
        yearsStart={2001}
        yearsEnd={2010}
        heading={
          <div>
            <strong>Welcome to Telugu OG Movies Hub </strong>
          </div>
        }
      >
        <p>
         Dive into a handpicked collection of cult classics, unforgettable performances, and timeless stories from 2001 to 2010. Whether you're a die-hard fan or discovering them for the first time — this is your nostalgic journey through the original hits that shaped Tollywood.
        </p>

        <button>Explore</button>
      </WelcomeCard>

      <TelguMoviesCard className="card"/>
    </>
  );
}

export default App;
