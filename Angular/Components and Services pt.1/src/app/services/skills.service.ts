import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Abstract Thought',
      level: Level.Advanced,
    },
    {
      id: 2,
      name: 'Problem Solving',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Adaptation',
      level: Level.Intermediate
    }
  ]

  constructor() { }
}
