import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Estaciones} from '../models';
import {EstacionesRepository} from '../repositories';

export class EstacionController {
  constructor(
    @repository(EstacionesRepository)
    public estacionesRepository : EstacionesRepository,
  ) {}

  @post('/estaciones')
  @response(200, {
    description: 'Estaciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estaciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estaciones, {
            title: 'NewEstaciones',
            exclude: ['id'],
          }),
        },
      },
    })
    estaciones: Omit<Estaciones, 'id'>,
  ): Promise<Estaciones> {
    return this.estacionesRepository.create(estaciones);
  }

  @get('/estaciones/count')
  @response(200, {
    description: 'Estaciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estaciones) where?: Where<Estaciones>,
  ): Promise<Count> {
    return this.estacionesRepository.count(where);
  }

  @get('/estaciones')
  @response(200, {
    description: 'Array of Estaciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estaciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estaciones) filter?: Filter<Estaciones>,
  ): Promise<Estaciones[]> {
    return this.estacionesRepository.find(filter);
  }

  @patch('/estaciones')
  @response(200, {
    description: 'Estaciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estaciones, {partial: true}),
        },
      },
    })
    estaciones: Estaciones,
    @param.where(Estaciones) where?: Where<Estaciones>,
  ): Promise<Count> {
    return this.estacionesRepository.updateAll(estaciones, where);
  }

  @get('/estaciones/{id}')
  @response(200, {
    description: 'Estaciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estaciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Estaciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Estaciones>
  ): Promise<Estaciones> {
    return this.estacionesRepository.findById(id, filter);
  }

  @patch('/estaciones/{id}')
  @response(204, {
    description: 'Estaciones PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estaciones, {partial: true}),
        },
      },
    })
    estaciones: Estaciones,
  ): Promise<void> {
    await this.estacionesRepository.updateById(id, estaciones);
  }

  @put('/estaciones/{id}')
  @response(204, {
    description: 'Estaciones PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() estaciones: Estaciones,
  ): Promise<void> {
    await this.estacionesRepository.replaceById(id, estaciones);
  }

  @del('/estaciones/{id}')
  @response(204, {
    description: 'Estaciones DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.estacionesRepository.deleteById(id);
  }
}
