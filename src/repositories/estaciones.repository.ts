import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Estaciones, EstacionesRelations} from '../models';

export class EstacionesRepository extends DefaultCrudRepository<
  Estaciones,
  typeof Estaciones.prototype.id,
  EstacionesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Estaciones, dataSource);
  }
}
