import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  dataService: SkillsService;

    

  constructor(private skillsService: SkillsService) {
    this.dataService = this.skillsService;
   }

  ngOnInit() {
    this.skills = this.dataService.skills;
  }

}
