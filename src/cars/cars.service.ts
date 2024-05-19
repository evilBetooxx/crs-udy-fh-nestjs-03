import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fiesta',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A3',
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X3',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car)  throw new NotFoundException(`Carro con id: ${id} no encontrado`);

    return car;
  }
}
