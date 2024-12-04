import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
};

export default App;
