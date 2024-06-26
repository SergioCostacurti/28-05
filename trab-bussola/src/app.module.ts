import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';
import { CreateProductMiddleware } from './produtos/common/middleware/create-produto.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/aula2805'),
    ProdutosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CreateProductMiddleware)
      .forRoutes({ path: 'produtos', method: RequestMethod.POST });
  }
}
