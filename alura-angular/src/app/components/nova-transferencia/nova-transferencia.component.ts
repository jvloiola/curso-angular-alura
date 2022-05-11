import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aotransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  tranferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aotransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }





  constructor() {}

  ngOnInit(): void {}
}
