import { Request, Response } from 'express';
import ResourceService from '../services/ResourceService';

class ResourceController {
  static async createResource(req: Request, res: Response) {
    const resource = await ResourceService.createResource(req.body);
    res.status(201).json(resource);
  }

  static async listResources(req: Request, res: Response) {
    const resources = await ResourceService.listResources(req.query);
    res.status(200).json(resources);
  }

  static async getResource(req: Request, res: Response) {
    const resource = await ResourceService.getResource(req.params.id);
    res.status(200).json(resource);
  }

  static async updateResource(req: Request, res: Response) {
    const resource = await ResourceService.updateResource(req.params.id, req.body);
    res.status(200).json(resource);
  }

  static async deleteResource(req: Request, res: Response) {
    await ResourceService.deleteResource(req.params.id);
    res.status(204).send();
  }
}

export default ResourceController;
