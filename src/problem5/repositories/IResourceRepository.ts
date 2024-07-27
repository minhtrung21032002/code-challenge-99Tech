interface IResourceRepository {
    create(data: any): Promise<any>;
    findAll(query: any): Promise<any>;
    findById(id: string): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
  }
  
  export default IResourceRepository;
  