/* istanbul ignore file */
import { Entity, Property } from '@mikro-orm/core';
import { ConstructorValues } from '../utils/types';
import { Node } from './Node';

export type UserConstructorValues = ConstructorValues<User>;

@Entity()
export class User extends Node<User> {
  @Property({ columnType: 'text' })
  name: string;

  pronouns: string;
  location?: string;
  hireable?: boolean;
  purpose: string;
  schoolName:string;
  major: string;
  graduationDate?: Date;


  constructor({ name, pronouns, purpose, schoolName, major, ...extraValues }: UserConstructorValues) {
    super(extraValues);

    this.name = name;
   
    this.pronouns = pronouns;
    this.purpose = purpose;
    this.schoolName = schoolName;
    this.major = major;
    //add other fields to constructor
  }
}
