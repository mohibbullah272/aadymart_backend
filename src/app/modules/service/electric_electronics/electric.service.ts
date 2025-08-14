import { IElectric, IElectricUpdate } from "./electric.interface";
import electricModel from "./electric.model";



 class ArchService {
    // Create new event
    async create(webData: IElectric): Promise<IElectric> {
      const web = new electricModel(webData);
      return await web.save();
    }
  
    // Get all events
    async findAll(): Promise<IElectric[]> {
      return await electricModel.find().sort({ createdAt: -1 });
    }
  
    // Get single event by ID
    async findById(id: string): Promise<IElectric | null> {
      return await electricModel.findById(id);
    }
  
    // Update event
    async update(id: string, eventData: IElectricUpdate): Promise<IElectric | null> {
      return await electricModel.findByIdAndUpdate(id, eventData, { new: true });
    }
  
    // Delete event
    async delete(id: string): Promise<IElectric | null> {
      return await electricModel.findByIdAndDelete(id);
    }
  }

export default new ArchService