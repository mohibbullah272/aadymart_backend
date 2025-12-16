import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import { Hotel } from "./hotel.model";


class hotelService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new Hotel(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await Hotel.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await Hotel.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await Hotel.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await Hotel.findByIdAndDelete(id);
  }
}

export default new hotelService();