
import { IT, ITUpdate } from "./IT.interface";
import ITModel from "./IT.model";



class ITService {
  // Create new event
  async create(eventData: IT): Promise<IT> {
    const event = new ITModel(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IT[]> {
    return await ITModel.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IT | null> {
    return await ITModel.findById(id);
  }

  // Update event
  async update(id: string, eventData: ITUpdate): Promise<IT | null> {
    return await ITModel.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IT | null> {
    return await ITModel.findByIdAndDelete(id);
  }
}

export default new ITService();