import { Component, OnInit } from '@angular/core';
import {Observable,of, from } from 'rxjs';

const URL = "ws://localhost:9090"

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
ws: WebSocket;

card_info = lista_entregas;

pos_actual:number = 0;
  constructor() {
//    var socket = new WebSocket(URL)
//    socket.onopen=(event) => console.log("conectado");
//    socket.onerror=(event) => console.log(event);
  }

  ngOnInit() {
    this.card_info[0] = lista_entregas[0];
    this.card_info[10] = lista_entregas[10];
    console.log(this.card_info[10]);


    setInterval(() => {
      this.contador(); 
    }, 1000);  }

contador(){
    if(this.pos_actual <= 9){
      this.card_info[0] = lista_entregas[this.pos_actual];
      this.card_info[10] = lista_entregas[10+this.pos_actual];
      this.card_info[20] = lista_entregas[20+this.pos_actual];
      this.card_info[30] = lista_entregas[30+this.pos_actual];
      this.pos_actual = this.pos_actual + 1;
    }
  }
}

var lista_entregas = [
  {
    route_id : "RG010",
    status : "onroute",
    deliveries: 1,
    conductor: "José Morales",
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "-",
    },
    {
    route_id : "RG010",
    status : "onroute",
    deliveries: 2,
    conductor: "José Morales",
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "-",
    },
    {
    route_id : "RG010",
    status : "onroute",
    deliveries: 3,
    conductor: "José Morales",
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "-",
    },
    {
    route_id : "RG010",
    status : "onroute",
    deliveries: 4,
    conductor: "José Morales",
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "-",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "10:00 am",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "1:00 pm",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "1:00 pm",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG010",
    status : "finished",
    deliveries: 5,
    conductor: "José Morales", 
    created_at: "2007-11-09",
    time_start: "1:00 pm",
    complet_at: "12:00 pm",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 0,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 0,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 1,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 2,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 3,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 4,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 5,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "RG020",
    status : "onroute",
    deliveries: 6,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    { 
    route_id : "RG020",
    status : "onroute",
    deliveries: 7,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "-",
    },
    {
    route_id : "2RG020",
    status : "finished",
    deliveries: 7,
    conductor: "Victor Hernandez",
    created_at: "2007-13-09",
    time_start: "13:00 pm",
    complet_at: "17:00 pm",
    }, 
    {
    route_id : "3RG030",
    status : "onroute",
    deliveries: 0,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "-",
    }, 
    {
    route_id : "3RG030",
    status : "onroute",
    deliveries: 0,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "-",
    }, 
    {
    route_id : "3RG030",
    status : "onroute",
    deliveries: 0,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "-",
    }, 
    {
    route_id : "3RG030",
    status : "onroute",
    deliveries: 0,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "-",
    }, 
    {
    route_id : "3RG030",
    status : "onroute",
    deliveries: 1,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "-",
    }, 
    {
      route_id : "3RG030",
      status : "finished",
      deliveries: 1,
      conductor: "Monica Gonzalez",
      created_at: "2007-11-09",
      time_start: "12:00 pm",
      complet_at: "13:00 pm",
      }, 
      {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "13:00 pm",
    }, 
    {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "13:00 pm",
    }, 
    {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "13:00 pm",
    }, 
    {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Monica Gonzalez",
    created_at: "2007-11-09",
    time_start: "12:00 pm",
    complet_at: "13:00 pm",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 0,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "4RG040",
    status : "onroute",
    deliveries: 1,
    conductor: "Oliver Portuguez",
    created_at: "2007-13-09",
    time_start: "07:00 am",
    complet_at: "-",
    }, 
    {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Oliver Portuguez",
    created_at: "2007-11-09",
    time_start: "07:00 am",
    complet_at: "18:00 pm",
    }, 
    {
    route_id : "3RG030",
    status : "finished",
    deliveries: 1,
    conductor: "Oliver Portuguez",
    created_at: "2007-11-09",
    time_start: "07:00 am",
    complet_at: "18:00 pm",
    }
  
];


