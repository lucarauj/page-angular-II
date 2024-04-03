import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CampeonatoService } from './services/campeonato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  tabela!: any;
  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieA();
  }

  constructor(private campeonatoService: CampeonatoService) {
    

  }
 
}
