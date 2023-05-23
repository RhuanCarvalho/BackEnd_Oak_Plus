interface HistoryTrade {
    id: number;
    tipo_trade: string;
    data_trade_entrada: number;
    data_trade_saida: number;
    trade_entrada: number;
    trade_saida: number;
    resultado_valor: number;
    resultado_pontos: number;
  }

interface Training {
  id: number;
  date: number;
  resultado_diario_valor: number;
  total_trades_gain: number;
  total_trades_loss: number;
  total_trades: number;
  porcent_trades_gain: number;
  porcent_trades_loss: number;
}

interface Genoma {
  id: number;
  fitness: number;
  resultado_total_valor: number;
  total_trades_gain: number;
  total_trades_loss: number;
  total_trades: number;
  media_porcent_desejada: number;
  media_porcent_atingida: number;
  total_dias_training: number;
}

interface Generation {
  id: number;      
  id_generation: number;
  total_dias_treinados: number;
  total_populacao: number;
}

interface Candle {
    id: number;
    id_dia: number;
    date: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }  

interface Dia {
  dia: number;
}


export { Generation, Genoma, Training, HistoryTrade, Dia, Candle };



