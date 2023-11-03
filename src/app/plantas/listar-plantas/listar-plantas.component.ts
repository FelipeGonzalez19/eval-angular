import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../plantas.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  plantas: Array<Planta> =[];

  constructor(private plantaService: PlantasService) { }

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(planta => this.plantas = planta)
  }

}
