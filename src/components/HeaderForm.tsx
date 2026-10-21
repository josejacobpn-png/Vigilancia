

export function HeaderForm() {
  return (
    <div className="glass-card">
      <h2>Cabeçalho do Inquérito</h2>
      
      <div className="form-group">
        <label className="form-label">Órgão Executor</label>
        <input type="text" className="form-control" placeholder="Ex: Secretaria de Saúde" />
      </div>

      <div className="form-group">
        <label className="form-label">Data</label>
        <input type="date" className="form-control" />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label">UF</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
        <div className="form-group" style={{ flex: 2 }}>
          <label className="form-label">Município</label>
          <input type="text" className="form-control" placeholder="Nome do município" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Distrito / Localidade</label>
        <input type="text" className="form-control" placeholder="Distrito ou localidade" />
      </div>

      <div className="form-group">
        <label className="form-label">Tipo de Inquérito</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="inquerito" value="1" className="radio-input" />
            1 - Escolar
          </label>
          <label className="radio-label">
            <input type="radio" name="inquerito" value="2" className="radio-input" />
            2 - Domiciliar
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Escola</label>
        <input type="text" className="form-control" placeholder="Nome da escola (se aplicável)" />
      </div>

      <div className="form-group">
        <label className="form-label">Endereço</label>
        <input type="text" className="form-control" placeholder="Endereço completo" />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="form-group" style={{ flex: '1 1 120px' }}>
          <label className="form-label">Turno</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="M">Manhã</option>
            <option value="T">Tarde</option>
            <option value="N">Noite</option>
            <option value="I">Integral</option>
          </select>
        </div>
        <div className="form-group" style={{ flex: '1 1 120px' }}>
          <label className="form-label">Classe / Turma</label>
          <input type="text" className="form-control" placeholder="Ex: 5º B" />
        </div>
        <div className="form-group" style={{ flex: '1 1 120px' }}>
          <label className="form-label">Zona</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="Urbana">Urbana</option>
            <option value="Rural">Rural</option>
          </select>
        </div>
      </div>
    </div>
  );
}
