import { useState } from 'react';
import { HeaderForm } from './components/HeaderForm';
import { PatientForm } from './components/PatientForm';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { PCEHeader } from './components/pce/PCEHeader';
import { PCEPatient } from './components/pce/PCEPatient';
import { ScorpionForm } from './components/scorpions/ScorpionForm';
import { OvitrampasForm } from './components/ovitrampas/OvitrampasForm';

type Module = 'none' | 'tracoma' | 'pce' | 'scorpion' | 'ovitrampas';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModule, setActiveModule] = useState<Module>('none');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  if (activeModule === 'none') {
    return (
      <Dashboard 
        onSelectModule={(mod) => setActiveModule(mod)} 
        onLogout={() => {
          setIsLoggedIn(false);
          setActiveModule('none');
        }} 
      />
    );
  }

  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
        <button 
          onClick={() => setActiveModule('none')}
          style={{ 
            position: 'absolute', 
            top: '0.25rem', 
            left: 0, 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            fontSize: '1.5rem',
            lineHeight: 1
          }}
          title="Voltar ao Início"
        >
          &larr;
        </button>

        <h1 style={{ color: activeModule === 'pce' ? '#3b82f6' : activeModule === 'scorpion' ? '#f97316' : activeModule === 'ovitrampas' ? '#8b5cf6' : 'var(--primary)', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
          VigiPrime
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.25rem' }}>
          {activeModule === 'tracoma' && 'Módulo Tracoma'}
          {activeModule === 'pce' && 'Módulo Esquistossomose (PCE)'}
          {activeModule === 'scorpion' && 'Busca Ativa de Escorpiões'}
          {activeModule === 'ovitrampas' && 'Monitoramento de Ovitrampas'}
        </p>
      </header>

      <main>
        {activeModule === 'tracoma' && (
          <>
            <HeaderForm />
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Entrevistados (0)</h2>
            </div>
            <PatientForm />
          </>
        )}

        {activeModule === 'pce' && (
          <>
            <PCEHeader />
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Residentes (0)</h2>
            </div>
            <PCEPatient />
          </>
        )}

        {activeModule === 'scorpion' && (
          <ScorpionForm />
        )}

        {activeModule === 'ovitrampas' && (
          <OvitrampasForm />
        )}
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <button type="button" className="btn-primary" style={{ backgroundColor: 'var(--text-main)' }}>
          Finalizar {activeModule === 'tracoma' ? 'Inquérito' : 'Diário'}
        </button>
        <p style={{ marginTop: '1rem' }}>&copy; {new Date().getFullYear()} - VigiPrime</p>
      </footer>
    </div>
  )
}

export default App;
