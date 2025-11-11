import { IBlog, IBlogUpdate } from "./blog.interface";
import blog from "./blog.model";


class BlogService {
  // Create new event
  async create(eventData: IBlog): Promise<IBlog> {
    const event = new blog(eventData);
    return await event.save();
  }

  // Get all events
  async findAll(): Promise<IBlog[]> {
    return await blog.find().sort({ createdAt: -1 });
  }

  // Get single event by ID
  async findById(id: string): Promise<IBlog | null> {
    return await blog.findById(id);
  }

  // Update event
  async update(id: string, eventData: IBlogUpdate): Promise<IBlog | null> {
    return await blog.findByIdAndUpdate(id, eventData, { new: true });
  }

  // Delete event
  async delete(id: string): Promise<IBlog | null> {
    return await blog.findByIdAndDelete(id);
  }
}

export default new BlogService();