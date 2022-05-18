import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareils: number;


  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'allumé'){
      return "green";
    }
    else {
      return "red";
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareils);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareils);
  }
}
