-- CreateTable
CREATE TABLE "Train" (
    "id" SERIAL NOT NULL,
    "ativo" TEXT NOT NULL,
    "timeframe" INTEGER NOT NULL,
    "data_train" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Train_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "data_trade" TIMESTAMP(3) NOT NULL,
    "trade_certo" INTEGER NOT NULL,
    "trade_previsto" INTEGER NOT NULL,
    "key_train" INTEGER NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PossiveisTrade" (
    "id" SERIAL NOT NULL,
    "id_type_trade" INTEGER NOT NULL,
    "time_abertura" TIMESTAMP(3) NOT NULL,
    "time_saida" TIMESTAMP(3) NOT NULL,
    "preco_abertura" DOUBLE PRECISION NOT NULL,
    "preco_saida" DOUBLE PRECISION NOT NULL,
    "preco_alvo" DOUBLE PRECISION NOT NULL,
    "preco_stop" DOUBLE PRECISION NOT NULL,
    "risco_max_pts" DOUBLE PRECISION NOT NULL,
    "risco_max_valor" DOUBLE PRECISION NOT NULL,
    "retorno_max_pts" DOUBLE PRECISION NOT NULL,
    "retorno_max_valor" DOUBLE PRECISION NOT NULL,
    "resultado_pts" DOUBLE PRECISION NOT NULL,
    "resultado_valor" DOUBLE PRECISION NOT NULL,
    "tempo_operacao" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "alvo_atingido" BOOLEAN NOT NULL,
    "stop_atingido" BOOLEAN NOT NULL,
    "key_trades_train" INTEGER NOT NULL,

    CONSTRAINT "PossiveisTrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candle" (
    "id" SERIAL NOT NULL,
    "timeframe" INTEGER NOT NULL,
    "ativo" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "open" DOUBLE PRECISION NOT NULL,
    "high" DOUBLE PRECISION NOT NULL,
    "low" DOUBLE PRECISION NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "media9E" DOUBLE PRECISION NOT NULL,
    "media20A" DOUBLE PRECISION NOT NULL,
    "media200A" DOUBLE PRECISION NOT NULL,
    "vwap" DOUBLE PRECISION NOT NULL,
    "stochd" DOUBLE PRECISION NOT NULL,
    "stochk" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Candle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_key_train_fkey" FOREIGN KEY ("key_train") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossiveisTrade" ADD CONSTRAINT "PossiveisTrade_key_trades_train_fkey" FOREIGN KEY ("key_trades_train") REFERENCES "Trade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
