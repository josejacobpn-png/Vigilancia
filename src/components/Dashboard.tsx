

interface DashboardProps {
  onSelectModule: (module: 'tracoma' | 'pce' | 'scorpion' | 'ovitrampas') => void;
  onLogout: () => void;
}

export function Dashboard({ onSelectModule, onLogout }: DashboardProps) {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ color: 'var(--primary)', fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
            VigiPrime
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Painel Inicial</p>
        </div>
        <button 
          onClick={onLogout}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            fontSize: '0.875rem',
            textDecoration: 'underline'
          }}
        >
          Sair
        </button>
      </header>

      <main style={{ flex: 1 }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>
          Selecione o Inquérito
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            className="glass-card" 
            style={{ 
              display: 'block', 
              width: '100%', 
              textAlign: 'left', 
              cursor: 'pointer',
              borderLeft: '4px solid var(--primary)',
              padding: '1.5rem',
              transition: 'transform 0.2s',
            }}
            onClick={() => onSelectModule('tracoma')}
          >
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Módulo Tracoma</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Fichas de inquérito escolar e domiciliar para Tracoma.
            </p>
          </button>

          <button 
            className="glass-card" 
            style={{ 
              display: 'block', 
              width: '100%', 
              textAlign: 'left', 
              cursor: 'pointer',
              borderLeft: '4px solid #3b82f6', // Azul para diferenciar
              padding: '1.5rem',
              transition: 'transform 0.2s',
            }}
            onClick={() => onSelectModule('pce')}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#3b82f6', marginBottom: '0.5rem' }}>Módulo Esquistossomose (PCE)</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Diário de coproscopia e tratamento de Esquistossomose.
            </p>
          </button>

          <button 
            className="glass-card" 
            style={{ 
              display: 'block', 
              width: '100%', 
              textAlign: 'left', 
              cursor: 'pointer',
              borderLeft: '4px solid #f97316', // Laranja
              padding: '1.5rem',
              transition: 'transform 0.2s',
            }}
            onClick={() => onSelectModule('scorpion')}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#f97316', marginBottom: '0.5rem' }}>Módulo Escorpiões</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Ficha de busca ativa de escorpiões e controle.
            </p>
          </button>

          <button 
            className="glass-card" 
            style={{ 
              display: 'block', 
              width: '100%', 
              textAlign: 'left', 
              cursor: 'pointer',
              borderLeft: '4px solid #8b5cf6', // Roxo
              padding: '1.5rem',
              transition: 'transform 0.2s',
            }}
            onClick={() => onSelectModule('ovitrampas')}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#8b5cf6', marginBottom: '0.5rem' }}>Módulo Ovitrampas</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Boletim de monitoramento de ovitrampas (Aedes).
            </p>
          </button>
        </div>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.875rem', paddingBottom: '1rem' }}>
        <p>&copy; {new Date().getFullYear()} - VigiPrime</p>
      </footer>
    </div>
  );
}
