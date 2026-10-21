
export function PatientForm() {
  return (
    <div className="glass-card" style={{ borderLeft: '4px solid var(--primary)' }}>
      <h2>Dados do Entrevistado</h2>
      
      <div className="form-group">
        <label className="form-label">Nome Completo</label>
        <input type="text" className="form-control" placeholder="Nome do paciente" />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Sexo</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
          </select>
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Idade</label>
          <input type="number" className="form-control" placeholder="Anos" min="0" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Tracoma?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="tracoma" value="S" className="radio-input" /> Sim
            </label>
            <label className="radio-label">
              <input type="radio" name="tracoma" value="N" className="radio-input" /> Não
            </label>
          </div>
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Código</label>
          <input type="text" className="form-control" placeholder="Código" />
        </div>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
      <h3 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '1rem' }}>Avaliação Clínica</h3>

      <div className="form-group">
        <label className="form-label">Forma Clínica - OD (Olho Direito)</label>
        <div className="checkbox-grid">
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TF" /> TF</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TI" /> TI</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TS" /> TS</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TT" /> TT</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="CO" /> CO</label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Forma Clínica - OE (Olho Esquerdo)</label>
        <div className="checkbox-grid">
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TF" /> TF</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TI" /> TI</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TS" /> TS</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="TT" /> TT</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="CO" /> CO</label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Outras Afecções Oculares</label>
        <div className="checkbox-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="Conj" /> Conjuntivite</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" value="Cat" /> Catarata</label>
        </div>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Acuidade Visual OD</label>
          <input type="text" className="form-control" placeholder="Ex: 20/20" />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">Acuidade Visual OE</label>
          <input type="text" className="form-control" placeholder="Ex: 20/20" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Atividade Realizada</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="atividade" value="E" className="radio-input" /> E (Exame)
          </label>
          <label className="radio-label">
            <input type="radio" name="atividade" value="T" className="radio-input" /> T (Tratamento)
          </label>
        </div>
      </div>

      <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>
        Salvar Entrevistado
      </button>
    </div>
  );
}
