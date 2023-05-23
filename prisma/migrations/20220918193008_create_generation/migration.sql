-- CreateTable
CREATE TABLE "generations" (
    "id" SERIAL NOT NULL,
    "id_generation" INTEGER NOT NULL,
    "total_dias_treinados" INTEGER NOT NULL,
    "total_populacao" INTEGER NOT NULL,

    CONSTRAINT "generations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genomas" (
    "id" SERIAL NOT NULL,
    "fitness" DOUBLE PRECISION NOT NULL,
    "resultado_total_valor" DOUBLE PRECISION NOT NULL,
    "total_trades_gain" INTEGER NOT NULL,
    "total_trades_loss" INTEGER NOT NULL,
    "total_trades" INTEGER NOT NULL,
    "media_porcent_desejada" DOUBLE PRECISION NOT NULL,
    "media_porcent_atingida" DOUBLE PRECISION NOT NULL,
    "total_dias_training" INTEGER NOT NULL,
    "id_generation" INTEGER NOT NULL,

    CONSTRAINT "genomas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" SERIAL NOT NULL,
    "resultado_diario_valor" DOUBLE PRECISION NOT NULL,
    "total_trades_gain" INTEGER NOT NULL,
    "total_trades_loss" INTEGER NOT NULL,
    "total_trades" INTEGER NOT NULL,
    "porcent_trades_gain" DOUBLE PRECISION NOT NULL,
    "porcent_trades_loss" DOUBLE PRECISION NOT NULL,
    "id_genoma" INTEGER NOT NULL,
    "id_dia" INTEGER NOT NULL,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dias" (
    "id" SERIAL NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candles" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "open" DOUBLE PRECISION NOT NULL,
    "high" DOUBLE PRECISION NOT NULL,
    "low" DOUBLE PRECISION NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "id_dia" INTEGER NOT NULL,

    CONSTRAINT "candles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history_trades" (
    "id" SERIAL NOT NULL,
    "tipo_trade" TEXT NOT NULL,
    "data_trade_entrada" TIMESTAMP(3) NOT NULL,
    "data_trade_saida" TIMESTAMP(3) NOT NULL,
    "trade_entrada" DOUBLE PRECISION NOT NULL,
    "trade_saida" DOUBLE PRECISION NOT NULL,
    "resultado_valor" DOUBLE PRECISION NOT NULL,
    "resultado_pontos" DOUBLE PRECISION NOT NULL,
    "id_training" INTEGER NOT NULL,

    CONSTRAINT "history_trades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genomas_id_generation_key" ON "genomas"("id_generation");

-- CreateIndex
CREATE UNIQUE INDEX "trainings_id_genoma_key" ON "trainings"("id_genoma");

-- AddForeignKey
ALTER TABLE "genomas" ADD CONSTRAINT "genomas_id_generation_fkey" FOREIGN KEY ("id_generation") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_id_genoma_fkey" FOREIGN KEY ("id_genoma") REFERENCES "genomas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "dias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candles" ADD CONSTRAINT "candles_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "dias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_trades" ADD CONSTRAINT "history_trades_id_training_fkey" FOREIGN KEY ("id_training") REFERENCES "trainings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
