import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './Ticket';
import { first } from 'rxjs';
import { TicketComponent } from './ticket/ticket.component';


@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];
  addNewTicket(event: {title: string, text: string}){
    if(this.tickets.length === 0){
      let firstTicket: Ticket = {id: "1", title: event.title, text: event.text, status: 'open'};
      this.tickets.push(firstTicket);
    }else{
      let newTicket: Ticket = {id: (+this.tickets[this.tickets.length -1].id + 1).toString(), title: event.title, text: event.text, status: 'open'}
      this.tickets.push(newTicket);      
    }
  } 
}
