-- CreateTable
CREATE TABLE "trainingsoftests" (
    "id" SERIAL NOT NULL,
    "resultado_diario_valor" DOUBLE PRECISION NOT NULL,
    "total_trades_gain" INTEGER NOT NULL,
    "total_trades_loss" INTEGER NOT NULL,
    "total_trades" INTEGER NOT NULL,
    "porcent_trades_gain" DOUBLE PRECISION NOT NULL,
    "porcent_trades_loss" DOUBLE PRECISION NOT NULL,
    "id_dia" INTEGER NOT NULL,

    CONSTRAINT "trainingsoftests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history_tradesoftests" (
    "id" SERIAL NOT NULL,
    "tipo_trade" TEXT NOT NULL,
    "data_trade_entrada" TIMESTAMP(3) NOT NULL,
    "data_trade_saida" TIMESTAMP(3) NOT NULL,
    "trade_entrada" DOUBLE PRECISION NOT NULL,
    "trade_saida" DOUBLE PRECISION NOT NULL,
    "stop" DOUBLE PRECISION NOT NULL,
    "gain" DOUBLE PRECISION NOT NULL,
    "resultado_valor" DOUBLE PRECISION NOT NULL,
    "resultado_pontos" DOUBLE PRECISION NOT NULL,
    "id_training" INTEGER NOT NULL,

    CONSTRAINT "history_tradesoftests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trainingsoftests" ADD CONSTRAINT "trainingsoftests_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "dias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_tradesoftests" ADD CONSTRAINT "history_tradesoftests_id_training_fkey" FOREIGN KEY ("id_training") REFERENCES "trainingsoftests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
