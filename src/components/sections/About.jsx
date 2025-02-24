import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "HTML", "CSS", "Javascript"];

  const clientSideSkills = ["C#", ".NET", "C++", "XAML", "WPF", "SQL Server"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Über mich
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
              In meiner bisherigen Laufbahn als Entwickler habe ich umfassende
              Erfahrung mit verschiedenen Technologien gesammelt. Zu Beginn
              entwickelte ich Software mit den Microsoft Foundation Classes und
              C++, einschließlich der dazugehörigen Datenbankstrukturen. Später
              erweiterte ich mein Wissen in C#, .NET und WPF. Nun möchte ich
              meine Expertise in der Frontend-Entwicklung vertiefen und mich auf
              React, HTML, CSS und JavaScript spezialisieren.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transitiion-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transitiion-all">
                <h3 className="text-xl font-bold mb-4"> ClientSide</h3>
                <div className="flex flex-wrap gap-2">
                  {clientSideSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📚Berufsschule</h3>
              <ul className="list-desc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    {" "}
                    Fachinformatiker Anwendungsentwicklung - TGBBZ1 (2017-2020)
                  </strong>{" "}
                </li>
                <li>
                  Grundlagen schaffen in C/C++ und SQL. Allgemeines Wissen in
                  der Informatik angeeignet in Bereichen wie Entwicklung,
                  Hardware, Netzwerke usw. Schreiben von Dokumentationen und
                  Webentwicklung.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼Berufserfahrung</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Client Entwickler bei IT Krämer GmbH (2022 - 2023){" "}
                  </h4>
                  <p>
                    Entwicklung von grafischen Oberflächen in WPF, der Logik vom
                    Client von servereye (IT Monitoring Software) in C#,
                    Anpassung hausinterner Software, arbeiten in gitlab, Visual
                    Studio, .net 4.8 auf .net 6 migriert, Zusammenarbeit in 10
                    Personen Team.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full Stack Entwickler bei Orgasoft Kommunal GmbH (2020-2022){" "}
                  </h4>
                  <p>
                    Entwicklung folgender Software in C/C++/Microsoft Foundation
                    Classes (MFC): Dynamische Baumstrukturen, grafische
                    Oberflächen, Logik von Liegenschaften Programm. Aufbau des
                    Datenbankmodells für diese Programme.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center z-10 px-4">
            <a href="#scroll-down" class="scroll-down text-blue-500">
              ↓ Scroll Down ↓
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
