import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { CharacterModel } from 'src/app/models/character-model';
import { CharactersService } from '../characters.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  characterModel: CharacterModel = new CharacterModel();

  formValue !: FormGroup;

  roles         = ["Tirador", "Tanque", "Soporte", "Mago"];
  personalities = ["Adicto", "Fuerte", "Ayudar", "Astuto"];

  constructor(
    private formBuilder: FormBuilder,
    private charactersSvc: CharactersService
  ) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      nameCharacter: [''],
      roleCharacter: [''],
      descriptionCharacter: [''],
      ageCharacter: [''],
      personalityCharacter: [''],
      skillCharacter: [''],
      createdCharacter: [''],
      nameCreator: [''],
    });

  }


  postCharacterDetails() {
    this.characterModel.nameCharacter        = this.formValue.value.nameCharacter;
    this.characterModel.roleCharacter        = this.formValue.value.roleCharacter;
    this.characterModel.descriptionCharacter = this.formValue.value.descriptionCharacter;
    this.characterModel.ageCharacter         = this.formValue.value.ageCharacter;
    this.characterModel.personalityCharacter = this.formValue.value.personalityCharacter;
    this.characterModel.skillCharacter       = this.formValue.value.skillCharacter;
    this.characterModel.createdCharacter     = this.formValue.value.createdCharacter;
    this.characterModel.nameCreator          = this.formValue.value.nameCreator;

    this.charactersSvc.addCharacter(this.characterModel)
      .subscribe( response => {
        console.log(response);
        alert(`Agregado`);
        this.formValue.reset;
      },
      err => {
        console.log(`Error =>`, err);
      });
  }

}
