"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Code, Sparkles } from "lucide-react";

const ProgrammerDay = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode after mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("dark");
    if (saved !== null) {
      setDark(saved === "true");
    } else if (typeof window !== "undefined") {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply dark mode and save preference
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("dark", dark.toString());
    }
  }, [dark, mounted]);

  if (!mounted) return null; // Avoid SSR mismatch

  const toggleMusic = () => {
    const audio = document.getElementById("celebrateMusic");
    if (!audio) return;
    if (audio.paused) audio.play();
    else audio.pause();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg">
            <Code className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Programmer Day</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Coding celebration — creativity, algorithms, coffee ☕
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-white/70 dark:bg-slate-700/60 backdrop-blur-md shadow hover:scale-105 transition-transform"
            aria-label="toggle theme"
          >
            {dark ? <Sun className="text-yellow-300" /> : <Moon className="text-slate-600" />}
          </button>
          <a
            href="#celebrate"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            <Sparkles />
            Celebrate
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6 opacity-0 translate-x-[-120px] animate-fadeInLeft">
            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Happy Programmer Day! 🎉
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Today we celebrate those who program the world with logic, art, and patience.
              Let's take a few minutes to remember past bugs, successful projects, and cups of coffee.
            </p>

            <div className="flex gap-3">
              <a
                href="#codesnippet"
                className="px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition"
              >
                Special Code
              </a>
              <a
                href="#activities"
                className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700"
              >
                Activities
              </a>
            </div>
          </div>

          <div className="relative opacity-0 scale-90 animate-scaleUp">
            <div className="rounded-2xl bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-700 shadow-2xl p-6">
              <pre className="rounded-md overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 font-mono text-sm">
{`// Happy Programmer's Day!
function celebrate() {
  const devs = ['frontend', 'backend', 'mobile', 'ai'];
  devs.forEach(d => console.log(\`Cheers to \${d} devs!\`));
}
celebrate();`}
              </pre>
            </div>
            <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-indigo-400/30 blur-xl transform rotate-6"></div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Suggested Activities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '2-Hour Game Jam', desc: 'Create a small game within a time limit', accent: 'from-rose-400 to-orange-300' },
              { title: 'Refactor Cleanup', desc: 'Optimize an old piece of code', accent: 'from-emerald-400 to-cyan-300' },
              { title: 'Algorithm Challenge', desc: 'Solve a fun programming problem', accent: 'from-violet-400 to-indigo-300' },
            ].map(it => (
              <article
                key={it.title}
                className={`rounded-2xl p-5 bg-gradient-to-br ${it.accent} shadow-lg text-white hover:-translate-y-1 transition-transform`}
              >
                <h4 className="font-semibold text-lg">{it.title}</h4>
                <p className="mt-2 text-sm opacity-90">{it.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Code Snippet Section */}
        <section id="codesnippet" className="py-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Small Code Snippet</h3>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900 shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-slate-500">A code snippet from the team</div>
              <div className="text-xs text-slate-400">JS • 7 lines</div>
            </div>
            <pre className="bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded font-mono text-sm overflow-auto">
{`const shout = name => \`✨ Happy Programmer's Day, \${name}! \`; 

console.log(shout('Our Team'));`}
            </pre>
          </div>
        </section>

        {/* Celebrate Section with Music */}
        <section id="celebrate" className="py-12 text-center">
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Time to Celebrate!</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A beautiful background, soft music, and some confetti is enough.
          </p>

          {/* Audio Player */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              className="px-6 py-3 rounded-full bg-emerald-500 text-white shadow hover:bg-emerald-600 transition"
              onClick={toggleMusic}
            >
              Confetti
            </button>
            <button
              className="px-6 py-3 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
              onClick={toggleMusic}
            >
              Play/Pause Music
            </button>
          </div>

          {/* Hidden Audio Element */}
          <audio id="celebrateMusic" loop>
            <source src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Made with ❤️ for programmers — <a className="text-indigo-600 dark:text-cyan-300" href="#">More Links</a>
      </footer>
    </div>
  );
};

export default ProgrammerDay;
