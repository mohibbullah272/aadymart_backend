import { IArch, IArchUpdate } from "./Arch.interface";
import archModel from "./arch.model";


 class ArchService {
    // Create new event
    async create(webData: IArch): Promise<IArch> {
      const web = new archModel(webData);
      return await web.save();
    }
  
    // Get all events
    async findAll(): Promise<IArch[]> {
      return await archModel.find().sort({ createdAt: -1 });
    }
  
    // Get single event by ID
    async findById(id: string): Promise<IArch | null> {
      return await archModel.findById(id);
    }
  
    // Update event
    async update(id: string, eventData: IArchUpdate): Promise<IArch | null> {
      return await archModel.findByIdAndUpdate(id, eventData, { new: true });
    }
  
    // Delete event
    async delete(id: string): Promise<IArch | null> {
      return await archModel.findByIdAndDelete(id);
    }
  }

export default new ArchService