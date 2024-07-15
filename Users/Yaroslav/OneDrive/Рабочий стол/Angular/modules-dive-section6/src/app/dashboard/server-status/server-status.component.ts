import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';
  
  serversStatus = ['online', 'offline', 'unknown'];
  
  private destroyRef = inject(DestroyRef);
  // private interval !: ReturnType<typeof setInterval>;
  
  
  ngOnInit(){
    console.log('On init.');
    let interval = setInterval(() => {
      this.currentStatus = this.serversStatus[Math.floor(Math.random() * 3)]; 
    }, 5000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })    
  }
  // ngOnDestroy(){
  //   console.log('Destroyed');
  //   clearTimeout(this.interval);
  // }
}
