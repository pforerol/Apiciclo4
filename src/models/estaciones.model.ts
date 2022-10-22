import {Entity, model, property} from '@loopback/repository';

@model()
export class Estaciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  coordenada_x: string;

  @property({
    type: 'string',
    required: true,
  })
  coordenada_y: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;


  constructor(data?: Partial<Estaciones>) {
    super(data);
  }
}

export interface EstacionesRelations {
  // describe navigational properties here
}

export type EstacionesWithRelations = Estaciones & EstacionesRelations;
