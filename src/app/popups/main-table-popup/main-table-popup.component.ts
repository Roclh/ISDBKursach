import { Component, OnInit } from '@angular/core';
import {Profession} from '../../samples/profession';
import {DialogService, DynamicDialogConfig} from 'primeng/dynamicdialog';
import {ProfessionService} from '../../services/profession.service';

@Component({
  selector: 'app-main-table-popup',
  templateUrl: './main-table-popup.component.html',
  styleUrls: ['./main-table-popup.component.css']
})
export class MainTablePopupComponent implements OnInit {
  id: number;
  profession: Profession;

  constructor(public config: DynamicDialogConfig,
              public professionService: ProfessionService){ }

  ngOnInit(): void {
    this.id = this.config.data.humanoid.id;
    this.profession = this.professionService.getProfession(this.config.data.humanoid.id);
  }


}
