import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilComponent } from '../appareil/appareil.component';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  name?: string = 'Appareil';
  status?: string = 'Status';

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name;
    this.status = this.appareilService.getAppareilById(+id)?.status;
  }

}
