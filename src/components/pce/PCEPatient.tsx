
export function PCEPatient() {
  return (
    <div className="glass-card" style={{ borderLeft: '4px solid #3b82f6' }}>
      <h2 style={{ color: '#3b82f6', borderBottomColor: '#bfdbfe' }}>Dados do Cadastro e Exames</h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Nº Quarteirão</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Nº Casa</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 2 }}>
          <label className="form-label">Situação da casa</label>
          <input type="text" className="form-control" placeholder="Ex: Fechada, Desabitada" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Nº Prontuário Família</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Nº de Residentes</label>
          <input type="number" className="form-control" />
        </div>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
      <h3 style={{ fontSize: '1rem', color: '#3b82f6', marginBottom: '1rem' }}>Identificação do Residente</h3>

      <div className="form-group">
        <label className="form-label">Nome do Residente</label>
        <input type="text" className="form-control" />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Idade</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Data Nasc.</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Sexo</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 2 }}>
          <label className="form-label">Nº Amostra / Cartão SUS</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Amostra Recolhida?</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </select>
        </div>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
      <h3 style={{ fontSize: '1rem', color: '#3b82f6', marginBottom: '1rem' }}>Resultados Laboratoriais</h3>

      <div className="form-group">
        <label className="form-label">S. m. Nº de ovos</label>
        <input type="number" className="form-control" placeholder="Quantidade" />
      </div>

      <div className="form-group">
        <label className="form-label">Presença de Helmintos / Protozoários</label>
        <div className="checkbox-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))' }}>
          {['ASC', 'ANC', 'TAC', 'TT', 'EV', 'SS', 'HN', 'EH', 'EC', 'IB', 'EM', 'GL'].map(exam => (
            <label key={exam} className="checkbox-label" style={{ justifyContent: 'center' }}>
              <input type="checkbox" className="checkbox-input" value={exam} /> {exam}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Outro</label>
        <input type="text" className="form-control" />
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
      <h3 style={{ fontSize: '1rem', color: '#3b82f6', marginBottom: '1rem' }}>Tratamento</h3>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Peso (kg)</label>
          <input type="number" step="0.1" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Conv. a tratar</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 2 }}>
          <label className="form-label">Med. S. m.</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Qtd. Consumida</label>
          <input type="number" className="form-control" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Medic. Helminto</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Medic. Protozoário</label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Motivo Não Tratamento</label>
        <input type="text" className="form-control" />
      </div>

      <button type="button" className="btn-primary" style={{ marginTop: '1rem', backgroundColor: '#3b82f6' }}>
        Salvar Residente
      </button>

    </div>
  );
}
