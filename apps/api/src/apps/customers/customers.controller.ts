import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { CustomersService } from './customers.service';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard) // Protect this route with JWT authentication
  async findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) // Protect this route with JWT authentication
  async findById(@Param('id') id: string) {
    return this.customersService.findById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) // Protect this route with JWT authentication
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) // Protect this route with JWT authentication
  async delete(@Param('id') id: string) {
    return this.customersService.delete(id);
  }
}
