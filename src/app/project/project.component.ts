import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() public name: string = "";
  @Input() public githubLink: string = "";
  @Input() public description: string = "";
  @Input() public technologies: string[] | string = [];

  private technologiesToString(): void {
    if (Array.isArray(this.technologies)) {
        this.technologies = this.technologies.join(", ");
    }
  }

  ngOnInit(): void {
    this.technologiesToString();
  }

}
