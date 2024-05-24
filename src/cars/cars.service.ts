import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index.dto';

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
    if (!car) throw new NotFoundException(`Carro con id: ${id} no encontrado`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let car = this.findOne(id);
    this.cars = this.cars.map((carFound) => {
      if (carFound.id === id) {
        car = { ...car, ...updateCarDto, id };
        return car;
      }
      return carFound;
    });
    return car;
  }

  delete (id: string) {
    const car = this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
