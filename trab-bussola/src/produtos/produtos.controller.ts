import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly service: ProdutosService) {}

  @Post()
  async createProduct(@Body() createDto: CreateProdutoDto) {
    return await this.service.create(createDto);
  }

  @Get()
  async getAllProducts() {
    return await this.service.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return await this.service.findOne(Number(id));
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateDto: UpdateProdutoDto) {
    return await this.service.update(Number(id), updateDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.service.remove(Number(id));
  }
}
