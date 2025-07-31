import mongoose, { Schema } from 'mongoose';
import { IService, ServiceCategory } from './service.interface';


const serviceSchema = new Schema<IService>(
  {
    name: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
      maxlength: [100, 'Service name cannot exceed 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
      trim: true,
      maxlength: [2000, 'Service description cannot exceed 2000 characters']
    },
    category: {
      type: String,
      required: [true, 'Service category is required'],
      enum: Object.values(ServiceCategory)
    },
    duration: {
      type: String,
      required: [true, 'Service duration is required'],
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    features: {
      type: [String],
      default: []
    },
    images: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Service = mongoose.model<IService>('Service', serviceSchema);

export default Service;

