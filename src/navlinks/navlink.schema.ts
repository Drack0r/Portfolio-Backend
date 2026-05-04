import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'navLinks' })
export class NavLink {
  @Prop({ required: true })
  href!: string;

  @Prop({ required: true })
  label!: string;
}

export type NavLinkDocument = HydratedDocument<NavLink>;
export const NavLinkSchema = SchemaFactory.createForClass(NavLink);
