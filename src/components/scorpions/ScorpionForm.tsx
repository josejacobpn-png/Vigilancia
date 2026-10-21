import { useState } from 'react';

export function ScorpionForm() {
  const [houveAcidente, setHouveAcidente] = useState(false);
  const [visitaAnterior, setVisitaAnterior] = useState(false);
  const [houveColeta, setHouveColeta] = useState(false);

  return (
    <div style={{ paddingBottom: '2rem' }}>
      
      {/* 1. CABEÇALHO */}
      <div className="glass-card" style={{ borderLeft: '4px solid #f97316' }}>
        <h2 style={{ color: '#f97316', borderBottomColor: '#fed7aa' }}>Dados da Solicitação</h2>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: '1 1 80px' }}>
            <label className="form-label">Nº</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: '1 1 120px' }}>
            <label className="form-label">Data da Solicitação</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Meio de Comunicação</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="pessoal">Pessoal</option>
            <option value="telefone">Telefone</option>
            <option value="eletronico">Eletrônico</option>
            <option value="imprensa">Imprensa</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Solicitante (Nome)</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Endereço Completo</label>
          <input type="text" className="form-control" />
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 2 }}>
            <label className="form-label">Bairro</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Telefone</label>
            <input type="tel" className="form-control" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 2 }}>
            <label className="form-label">Município</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">UF</label>
            <input type="text" className="form-control" maxLength={2} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Tipo de Imóvel</label>
          <select className="form-control form-select">
            <option value="">Selecione</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="escola">Escola</option>
            <option value="comercio">Comércio</option>
            <option value="escritorio">Escritório</option>
            <option value="industria">Indústria</option>
            <option value="terreno">Terreno Baldio</option>
            <option value="outro">Outro (Especificar abaixo)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Outro Tipo de Imóvel (se houver)</label>
          <input type="text" className="form-control" />
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Data da Visita</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Início às (hs)</label>
            <input type="time" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Término às (hs)</label>
            <input type="time" className="form-control" />
          </div>
        </div>
      </div>

      {/* 2. PERGUNTAS AO MORADOR */}
      <div className="glass-card" style={{ borderLeft: '4px solid #f97316' }}>
        <h2 style={{ color: '#f97316', borderBottomColor: '#fed7aa' }}>Perguntas ao Morador</h2>

        <div className="form-group">
          <label className="form-label">Houve acidente?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="acidente" value="S" className="radio-input" onChange={() => setHouveAcidente(true)} /> Sim
            </label>
            <label className="radio-label">
              <input type="radio" name="acidente" value="N" className="radio-input" onChange={() => setHouveAcidente(false)} /> Não
            </label>
          </div>
        </div>

        {/* Bloco Condicional: Acidente */}
        {houveAcidente && (
          <div style={{ backgroundColor: '#fff7ed', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px dashed #fdba74' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Data do Acidente</label>
                <input type="date" className="form-control" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Procurou Atendimento?</label>
                <select className="form-control form-select">
                  <option value="">Selecione</option>
                  <option value="S">Sim</option>
                  <option value="N">Não</option>
                </select>
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Nome do Acidentado</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Há quanto tempo observa escorpiões?</label>
            <input type="number" className="form-control" placeholder="Quantidade" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Unidade de tempo</label>
            <select className="form-control form-select">
              <option value="dias">Dias</option>
              <option value="meses">Meses</option>
              <option value="anos">Anos</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Horário de maior observação (Início)</label>
            <input type="time" className="form-control" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Até as (Fim)</label>
            <input type="time" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Onde são observados? (Pode selecionar vários)</label>
          <div className="checkbox-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
            {['Sala', 'Copa/Cozinha', 'Banheiro', 'Dormitório', 'Depósito/Despensa', 'Corredor', 'Garagem', 'Porão', 'Sótão', 'Jardim/Quintal'].map(loc => (
              <label key={loc} className="checkbox-label" style={{ fontSize: '0.8rem' }}>
                <input type="checkbox" className="checkbox-input" value={loc} /> {loc}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Outro local</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Houve visita anterior?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="visitaAnterior" value="S" className="radio-input" onChange={() => setVisitaAnterior(true)} /> Sim
            </label>
            <label className="radio-label">
              <input type="radio" name="visitaAnterior" value="N" className="radio-input" onChange={() => setVisitaAnterior(false)} /> Não
            </label>
          </div>
        </div>

        {/* Bloco Condicional: Visita Anterior */}
        {visitaAnterior && (
          <div style={{ backgroundColor: '#fff7ed', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px dashed #fdba74' }}>
            <div className="form-group">
              <label className="form-label">Foram adotadas as recomendações?</label>
              <select className="form-control form-select">
                <option value="">Selecione</option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Há quanto tempo? (Qtd)</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Unidade</label>
                <select className="form-control form-select">
                  <option value="dias">Dias</option>
                  <option value="meses">Meses</option>
                  <option value="anos">Anos</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">As recomendações foram efetivas?</label>
              <select className="form-control form-select">
                <option value="">Selecione</option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
                <option value="P">Parcialmente</option>
              </select>
            </div>
          </div>
        )}

        <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Possui rede de água?</label>
            <select className="form-control form-select"><option value="">Selecione</option><option value="S">Sim</option><option value="N">Não</option></select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Possui rede de esgoto?</label>
            <select className="form-control form-select"><option value="">Selecione</option><option value="S">Sim</option><option value="N">Não</option></select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Coleta de Lixo?</label>
            <select className="form-control form-select"><option value="">Selecione</option><option value="S">Sim</option><option value="N">Não</option></select>
          </div>
        </div>
      </div>

      {/* 3. DADOS DE COLETA */}
      <div className="glass-card" style={{ borderLeft: '4px solid #f97316' }}>
        <h2 style={{ color: '#f97316', borderBottomColor: '#fed7aa' }}>Coleta / Captura</h2>

        <div className="form-group">
          <label className="form-label">Houve coleta / captura?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="coleta" value="S" className="radio-input" onChange={() => setHouveColeta(true)} /> Sim
            </label>
            <label className="radio-label">
              <input type="radio" name="coleta" value="N" className="radio-input" onChange={() => setHouveColeta(false)} /> Não
            </label>
          </div>
        </div>

        {houveColeta && (
          <div style={{ backgroundColor: '#fff7ed', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px dashed #fdba74' }}>
            <div className="form-group">
              <label className="form-label">Quantidade</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Os animais foram:</label>
              <select className="form-control form-select">
                <option value="">Selecione</option>
                <option value="vivos">Vivos</option>
                <option value="mortos">Mortos</option>
                <option value="ambos">Vivos e Mortos</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Descrição do local de coleta/captura</label>
              <textarea className="form-control" rows={3}></textarea>
            </div>
          </div>
        )}
      </div>

      {/* 4. RECOMENDAÇÕES */}
      <div className="glass-card" style={{ borderLeft: '4px solid #f97316' }}>
        <h2 style={{ color: '#f97316', borderBottomColor: '#fed7aa' }}>Recomendações ao Morador</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Marque as recomendações passadas ao morador:
        </p>

        <div className="form-group">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Telar ralos nas áreas internas e externas',
              'Vedar frestas nas paredes, janelas, portas e pisos',
              'Instalar tampas em pontos de luz e caixas de fiação',
              'Rebocar paredes e muros',
              'Limpar e organizar depósitos de materiais',
              'Controlar a presença de baratas e outros insetos',
              'Acondicionar bem alimentos e lixo',
              'Providenciar limpeza de terrenos, quintais e jardins',
              'Recompor tampas de caixas de gordura e de passagem',
              'Retirar entulhos, pedras, madeiras ou tijolos'
            ].map((rec, i) => (
              <label key={i} className="checkbox-label" style={{ fontSize: '0.85rem' }}>
                <input type="checkbox" className="checkbox-input" /> {rec}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Outras Recomendações</label>
          <input type="text" className="form-control" />
        </div>

        <button type="button" className="btn-primary" style={{ marginTop: '1rem', backgroundColor: '#f97316' }}>
          Salvar Ficha de Escorpiões
        </button>
      </div>
      
    </div>
  );
}
