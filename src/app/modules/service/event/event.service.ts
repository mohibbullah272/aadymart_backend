import EventModel from './event.model';
import { IEvent, IEventCreate, IEventUpdate } from './event.interface';

class EventService {
  // Create new event
  async create(eventData: IEventCreate): Promise<IEvent> {
    const event = new EventModel(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IEvent[]> {
    return await EventModel.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IEvent | null> {
    return await EventModel.findById(id);
  }

  // Update event
  async update(id: string, eventData: IEventUpdate): Promise<IEvent | null> {
    return await EventModel.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IEvent | null> {
    return await EventModel.findByIdAndDelete(id);
  }
}

export default new EventService();