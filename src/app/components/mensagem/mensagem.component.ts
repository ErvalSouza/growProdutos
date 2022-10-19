import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  faTimes= faTimes
  constructor(public mensagemService: MensagemService) { }

  ngOnInit(): void {
  }

}
