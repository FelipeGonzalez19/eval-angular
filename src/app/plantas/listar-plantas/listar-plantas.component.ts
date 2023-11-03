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
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  constructor(private plantaService: PlantasService) { }

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(planta => {
      this.plantas = planta
      this.sumTipoPlanta(this.plantas)
    })
  }

  sumTipoPlanta(object: Array<Planta>){
    object.forEach(element => {
      if(element.tipo == 'Interior'){
        this.plantasInterior += 1
      }else{
        this.plantasExterior += 1
      }
    });
  }

}
