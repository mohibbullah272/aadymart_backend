import { IWeb, IWebUpdate } from "./web.interface";
import webModel from "./web.model";

 class WebService {
    // Create new event
    async create(webData: IWeb): Promise<IWeb> {
      const web = new webModel(webData);
      return await web.save();
    }
  
    // Get all events
    async findAll(): Promise<IWeb[]> {
      return await webModel.find().sort({ createdAt: -1 });
    }
  
    // Get single event by ID
    async findById(id: string): Promise<IWeb | null> {
      return await webModel.findById(id);
    }
  
    // Update event
    async update(id: string, eventData: IWebUpdate): Promise<IWeb | null> {
      return await webModel.findByIdAndUpdate(id, eventData, { new: true });
    }
  
    // Delete event
    async delete(id: string): Promise<IWeb | null> {
      return await webModel.findByIdAndDelete(id);
    }
  }

export default new WebService