import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

class Badge {
  src!: string;
  alt!: string;
}

@Schema({ timestamps: true, collection: 'projects' })
export class Project {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  imgSrc!: string;

  @Prop({ required: true })
  imgAlt!: string;

  @Prop()
  context?: string;

  @Prop()
  objectives?: string;

  @Prop()
  techStack?: string;

  @Prop()
  skills?: string;

  @Prop()
  results?: string;

  @Prop()
  improvements?: string;

  @Prop()
  websiteHref?: string;

  @Prop()
  githubHref?: string;

  @Prop({ type: [{ src: String, alt: String }], default: [] })
  badges?: Badge[];
}

export type ProjectDocument = HydratedDocument<Project>;
export const ProjectSchema = SchemaFactory.createForClass(Project);
