import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'skills' })
export class Skill {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  iconSrc!: string;

  @Prop({ required: true })
  iconAlt!: string;

  @Prop({
    default: 'gray',
    enum: ['orange', 'blue', 'pink', 'cyan', 'yellow', 'teal', 'gray', 'black'],
  })
  color!: string;

  @Prop({ required: true, default: 0, min: 0, max: 100 })
  progressLevel!: number;
}

export type SkillDocument = HydratedDocument<Skill>;
export const SkillSchema = SchemaFactory.createForClass(Skill);
