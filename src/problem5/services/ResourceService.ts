import ResourceRepository from '../repositories/ResourceRepository';

class ResourceService {
  static async createResource(data: any) {
    return await ResourceRepository.create(data);
  }

  static async listResources(query: any) {
    return await ResourceRepository.findAll(query);
  }

  static async getResource(id: string) {
    return await ResourceRepository.findById(id);
  }

  static async updateResource(id: string, data: any) {
    return await ResourceRepository.update(id, data);
  }

  static async deleteResource(id: string) {
    return await ResourceRepository.delete(id);
  }
}

export default ResourceService;
