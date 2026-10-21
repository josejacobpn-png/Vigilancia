
export function PCEHeader() {
  return (
    <div className="glass-card" style={{ borderLeft: '4px solid #3b82f6' }}>
      <h2 style={{ color: '#3b82f6', borderBottomColor: '#bfdbfe' }}>Cabeçalho - PCE</h2>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: '1 1 120px' }}>
          <label className="form-label">Controle</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: '1 1 80px' }}>
          <label className="form-label">UF</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="AC">AC</option>
            <option value="SP">SP</option>
            {/* Adicionar demais estados depois */}
          </select>
        </div>
        <div className="form-group" style={{ flex: '1 1 120px' }}>
          <label className="form-label">Folha</label>
          <input type="number" className="form-control" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: '1 1 200px' }}>
          <label className="form-label">Regional de Saúde</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: '1 1 200px' }}>
          <label className="form-label">Município</label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Nº e Nome da Localidade</label>
        <input type="text" className="form-control" />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Categoria da localidade</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Micro área</label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Fase</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 2 }}>
          <label className="form-label">Situação</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="LIT">1 - LIT</option>
            <option value="AVR">2 - AVR</option>
            <option value="VIG">3 - VIG</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Data Coproscopia</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Data Laboratório</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Data Tratamento</label>
          <input type="date" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Coproscopia</label>
        <select className="form-control form-select">
          <option value="">Selecione</option>
          <option value="1">1 - Inquérito censitário</option>
          <option value="2">2 - Inquérito por Amostragem</option>
          <option value="3">3 - Busca ativa</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Tratamento</label>
        <select className="form-control form-select">
          <option value="">Selecione</option>
          <option value="1">1 - Total da população (coletivo)</option>
          <option value="2">2 - Positivos</option>
          <option value="3">3 - Positivos conviventes</option>
        </select>
      </div>

    </div>
  );
}
