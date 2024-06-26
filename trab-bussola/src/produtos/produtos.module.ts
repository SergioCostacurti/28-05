import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Produtos, ProdutosSchema } from './schema/produto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Produtos.nome, schema: ProdutosSchema },
    ]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
