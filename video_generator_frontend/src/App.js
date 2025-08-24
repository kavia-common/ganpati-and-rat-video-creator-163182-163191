import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Colors come from work item:
 * primary: #F5A623, secondary: #7D3C98, accent: #27AE60
 * We apply them via CSS variables in App.css and inline styles where needed.
 */

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Scaffolding: available animation scenarios (placeholder data)
  const animations = [
    {
      id: 'ganpati-rat-cute-shit-run',
      title: 'Ganpati shitting on rat and rat running away (cute)',
      subtitle: 'Comical and cute interaction',
      description:
        'A playful, cartoony moment where Lord Ganpati humorously interacts with a cute rat, which then scurries away adorably.',
      // Placeholder thumbnail (emoji composition as temporary visual)
      thumbnail: '🪔🐘💩🐭💨',
      badge: 'New',
    },
    {
      id: 'rat-running',
      title: 'Cute rat running loop',
      subtitle: 'Simple loop',
      description: 'A smooth, cute running cycle for the rat character.',
      thumbnail: '🐭💨',
      badge: 'Basic',
    },
  ];

  const [selectedAnimationId, setSelectedAnimationId] = useState(animations[0].id);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // PUBLIC_INTERFACE
  const handleSelectAnimation = (id) => {
    /**
     * Select an animation scenario by id. This scaffolds the selection state only.
     * Future integration: preview generation and settings linkage.
     */
    setSelectedAnimationId(id);
  };

  const primaryStyle = { color: 'var(--brand-primary)' };

  return (
    <div className="App">
      {/* Header / Navbar */}
      <header className="app-navbar">
        <div className="navbar-left">
          <div className="brand-logo" aria-label="App logo">🎬</div>
          <div>
            <h1 className="title" style={primaryStyle}>Ganpati & Rat Video Creator</h1>
            <p className="subtitle">Generate cute, comical animation videos</p>
          </div>
        </div>
        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <main className="layout">
        {/* Sidebar: Animation selection */}
        <aside className="sidebar">
          <h2 className="section-title">Animation Scenarios</h2>
          <div className="animation-list">
            {animations.map((anim) => {
              const selected = selectedAnimationId === anim.id;
              return (
                <button
                  key={anim.id}
                  onClick={() => handleSelectAnimation(anim.id)}
                  className={`animation-card ${selected ? 'selected' : ''}`}
                  aria-pressed={selected}
                >
                  <div className="card-header">
                    <span className="thumbnail" role="img" aria-label="thumbnail">
                      {anim.thumbnail}
                    </span>
                    {anim.badge && <span className="badge">{anim.badge}</span>}
                  </div>
                  <div className="card-body">
                    <div className="anim-title">{anim.title}</div>
                    <div className="anim-subtitle">{anim.subtitle}</div>
                    <div className="anim-description">{anim.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content: Preview and actions */}
        <section className="content">
          <div className="panel">
            <h2 className="section-title">Preview</h2>
            <div className="preview-surface">
              <div className="preview-placeholder">
                <div className="preview-emoji">
                  {
                    animations.find(a => a.id === selectedAnimationId)?.thumbnail || '🎞️'
                  }
                </div>
                <div className="preview-caption">
                  {animations.find(a => a.id === selectedAnimationId)?.title}
                </div>
                <div className="preview-note">
                  Placeholder preview. Final assets/animation will appear here.
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Actions</h2>
            <div className="actions">
              <button className="btn btn-primary">Generate Video</button>
              <button className="btn btn-secondary">Download Latest</button>
              <button className="btn btn-ghost">Adjust Settings</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <span>© {new Date().getFullYear()} Cute Animations Lab</span>
          <span className="sep">•</span>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Learn React
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
