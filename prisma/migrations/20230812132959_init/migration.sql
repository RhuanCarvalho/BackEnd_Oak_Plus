-- DropForeignKey
ALTER TABLE "PossiveisTrade" DROP CONSTRAINT "PossiveisTrade_key_trades_train_fkey";

-- DropForeignKey
ALTER TABLE "Trade" DROP CONSTRAINT "Trade_key_train_fkey";

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_key_train_fkey" FOREIGN KEY ("key_train") REFERENCES "Train"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossiveisTrade" ADD CONSTRAINT "PossiveisTrade_key_trades_train_fkey" FOREIGN KEY ("key_trades_train") REFERENCES "Trade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
