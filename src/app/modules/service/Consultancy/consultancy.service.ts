import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import Consultancy from './consultancy.model'

class ConsultancyService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new Consultancy(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await Consultancy.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await Consultancy.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await Consultancy.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await Consultancy.findByIdAndDelete(id);
  }
}

export default new ConsultancyService();