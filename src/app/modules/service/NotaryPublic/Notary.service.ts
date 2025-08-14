import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import Notary from './Notary.model'

class NotaryService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new Notary(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await Notary.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await Notary.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await Notary.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await Notary.findByIdAndDelete(id);
  }
}

export default new NotaryService();