import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Ford',
      model: 'Fiesta',
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A3',
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'X3',
    },
  ];

    findAll() {
        return this.cars;
    }

    findOne(id: number) {
        return this.cars.find(car => car.id === id);
    }
}
