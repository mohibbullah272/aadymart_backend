import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import OfficeSchema from './office.model'

class OfficeService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new OfficeSchema(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await OfficeSchema.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await OfficeSchema.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await OfficeSchema.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await OfficeSchema.findByIdAndDelete(id);
  }
}

export default new OfficeService();