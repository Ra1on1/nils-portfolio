import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hallo, ich bin Nils Biewer
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Ich bin hochmotiviert, den Schritt in die Frontend-Entwicklung zu
            machen und habe aus diesem Grund diese Website mit JavaScript, CSS,
            HTML und React erstellt. Ursprünglich komme ich aus der
            Client-Entwicklung, doch mein größtes Interesse gilt dem
            Frontend-Bereich. Die Verbindung aus kreativem Design, interaktiven
            Nutzererlebnissen und technischer Präzision fasziniert mich
            besonders.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Kontaktieren Sie mich
            </a>
          </div>
          <a href="#scroll-down" class="scroll-down text-blue-500">
            ↓ Scroll Down ↓
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
