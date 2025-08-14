import { IAdd, IAddUpdate } from "./advertising.interface";
import AddSchema from './advertitsing.model';

class AdService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new AddSchema(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await AddSchema.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await AddSchema.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await AddSchema.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await AddSchema.findByIdAndDelete(id);
  }
}

export default new AdService();