import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadService } from 'src/app/services/entidad/entidad.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  entities: any[] = [];
  actualRoute: String = 'entity';
  constructor(private entidadService: EntidadService, private router: Router) {}

  ngOnInit() {
    this.getAllEntities();
  }

  getAllEntities() {
    this.entidadService.getAllEntities().subscribe((data) => {
      this.entities = data;
    });
  }

  editEntity(id: number) {
    this.router.navigate([`/${this.actualRoute}/update`], {
      queryParams: { id: id },
    });
  }

  deleteEntity(id: number) {
    this.entidadService.deleteEntity(id).subscribe(
      () => {
        this.entities = this.entities.filter((e) => e.idEntidad !== id);
      },
      (error) => {
        console.error(`Error deleting entity with ID ${id}:`, error);
      }
    );
  }
}
