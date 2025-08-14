import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import Travel from './travel.model'

class TravelService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new Travel(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await Travel.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await Travel.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await Travel.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await Travel.findByIdAndDelete(id);
  }
}

export default new TravelService();