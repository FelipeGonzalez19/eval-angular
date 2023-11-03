/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker'

import { ListarPlantasComponent } from './listar-plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
      new Planta(faker.datatype.number(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      ),
      new Planta(faker.datatype.number(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Tres filas más el encabezado > 3
  it('Component has a table',()=>{
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(3)
  })
});
