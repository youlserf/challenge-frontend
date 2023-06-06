import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad/entidad.service';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css'],
})
export class EntidadComponent implements OnInit {
  entities: any[] = [];
  newEntity: any = {};
  selectedEntity: any = {};

  constructor(private entidadService: EntidadService) {}

  ngOnInit() {
    this.getAllEntities();
  }

  getAllEntities() {
    this.entidadService.getAllEntities().subscribe((data) => {
      this.entities = data;
    });
  }

  getEntityById(id: number) {
    this.entidadService.getEntityById(id).subscribe((data) => {
      this.selectedEntity = data;
    });
  }

  createEntity() {
    this.entidadService.createEntity(this.newEntity).subscribe((data) => {
      this.entities.push(data);
      this.newEntity = {};
    });
  }

  updateEntity(id: number) {
    this.entidadService
      .updateEntity(id, this.selectedEntity)
      .subscribe((data) => {
        const index = this.entities.findIndex((e) => e.idEntidad === id);
        if (index !== -1) {
          this.entities[index] = data;
        }
      });
  }

  deleteEntity(id: number) {
    this.entidadService.deleteEntity(id).subscribe(() => {
      this.entities = this.entities.filter((e) => e.idEntidad !== id);
    });
  }
}
