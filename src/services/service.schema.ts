import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'services' })
export class Service {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true, maxLength: 500 })
  description!: string;

  @Prop({
    required: true,
    enum: ['code', 'device', 'layout', 'speed', 'web', 'eye'],
  })
  icon!: string;
}

export type ServiceDocument = HydratedDocument<Service>;
export const ServiceSchema = SchemaFactory.createForClass(Service);
