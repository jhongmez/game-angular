import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CharacterModel } from 'src/app/models/character-model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  characterModel: CharacterModel = new CharacterModel();

  modalRef: BsModalRef;

  characterData !: any;

  constructor(
    private modalService: BsModalService, 
    private charactersSvc: CharactersService
    ) 
  { }

  ngOnInit(): void {
    this.getCharacters();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getCharacters() {

    this.charactersSvc.getCharacters()
      .subscribe( response => {
        this.characterData = response;
      },
      err => {
        console.error(`Error =>`, err);
      });

  }

}
