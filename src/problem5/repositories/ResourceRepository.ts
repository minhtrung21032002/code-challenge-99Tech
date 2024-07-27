import Resource from '../models/resource';
import IResourceRepository from './IResourceRepository';

class ResourceRepository implements IResourceRepository {
  async create(data: any) {
    return await Resource.create(data);
  }

  async findAll(query: any) {
    return await Resource.findAll({ where: query });
  }

  async findById(id: string) {
    return await Resource.findByPk(id);
  }

  async update(id: string, data: any) {
    const resource = await Resource.findByPk(id);
    if (resource) {
      return await resource.update(data);
    }
    return null;
  }

  async delete(id: string) {
    const resource = await Resource.findByPk(id);
    if (resource) {
      return await resource.destroy();
    }
    return null;
  }
}

export default new ResourceRepository();
