import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProdutosDocument = HydratedDocument<Produtos>;

@Schema()
export class Produtos {
  @Prop()
  nome: string;

  @Prop()
  valor: number;

  @Prop()
  quantidade: number;
  static nome: any;
}

export const ProdutosSchema = SchemaFactory.createForClass(Produtos);
