
export function OvitrampasForm() {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      
      {/* 1. CABEÇALHO */}
      <div className="glass-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
        <h2 style={{ color: '#8b5cf6', borderBottomColor: '#ddd6fe' }}>Cabeçalho do Boletim</h2>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">SR/DTE</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 2 }}>
            <label className="form-label">Bairro</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Frente</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Ciclo</label>
            <input type="number" className="form-control" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">LIRAa</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">TRAT</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data Início</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data Término</label>
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>

      {/* 2. ARMADILHA */}
      <div className="glass-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
        <h2 style={{ color: '#8b5cf6', borderBottomColor: '#ddd6fe' }}>Armadilha</h2>

        <div className="form-group">
          <label className="form-label">Logradouro</label>
          <input type="text" className="form-control" />
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Nº QT</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Nº Imóvel</label>
            <input type="number" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Morador</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Nº Paleta</label>
          <input type="number" className="form-control" />
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data Instalação</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data Coleta</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Observações (Obs)</label>
          <select className="form-control form-select">
            <option value="">Selecione uma convenção</option>
            <option value="1">1 - Instalação/coleta &gt; 7 dias</option>
            <option value="2">2 - Ovitrampas/paletas desaparecidas</option>
            <option value="3">3 - Ovitrampas/paletas quebradas</option>
            <option value="4">4 - Ovitrampa/paleta removida</option>
            <option value="5">5 - Ovitrampa seca</option>
            <option value="6">6 - Casa fechada</option>
          </select>
        </div>
      </div>

      {/* 3. LABORATÓRIO */}
      <div className="glass-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
        <h2 style={{ color: '#8b5cf6', borderBottomColor: '#ddd6fe' }}>Laboratório</h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Nº de Ovos</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data da Leitura</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Nº Ae. Aegypti</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Nº Ae. Albopictus</label>
            <input type="number" className="form-control" />
          </div>
        </div>
      </div>

      {/* 4. RODAPÉ */}
      <div className="glass-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
        <h2 style={{ color: '#8b5cf6', borderBottomColor: '#ddd6fe' }}>Identificação</h2>

        <div className="form-group">
          <label className="form-label">Agente</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Supervisor</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Laboratorista</label>
          <input type="text" className="form-control" />
        </div>

        <button type="button" className="btn-primary" style={{ marginTop: '1rem', backgroundColor: '#8b5cf6' }}>
          Salvar Boletim
        </button>
      </div>
      
    </div>
  );
}
