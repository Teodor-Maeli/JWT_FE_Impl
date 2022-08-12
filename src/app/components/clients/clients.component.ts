import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { MatTableDataSource } from '@angular/material/table';
import { Clients } from '../../interfaces/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  displayedColumns:string[]= ['id','name','age'];
  dataSource:Clients[]=[];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getClients();
  }



  getClients() {
    this.clientService.getClients().subscribe(clients => {
      setTimeout(() => this.dataSource=clients, 500);
    });
  }



}
