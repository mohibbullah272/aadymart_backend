import { IAdd, IAddUpdate } from "../advertising/advertising.interface";
import Car from './car.model'

class CarService {
  // Create new event
  async create(eventData: IAdd): Promise<IAdd> {
    const event = new Car(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IAdd[]> {
    return await Car.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IAdd | null> {
    return await Car.findById(id);
  }

  // Update event
  async update(id: string, eventData: IAddUpdate): Promise<IAdd | null> {
    return await Car.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IAdd | null> {
    return await Car.findByIdAndDelete(id);
  }
}

export default new CarService();