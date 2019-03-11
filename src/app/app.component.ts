import { Component,ElementRef,Renderer2,OnInit,ViewChild,AfterViewInit,ChangeDetectorRef, AfterViewChecked,HostListener } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked{
  title = 'portfolioApp';
  @ViewChild('container') private container;
  @HostListener('loadend',['$event.target'])
  test(t){
    console.log("ffffff")
    this.started = true;
    this.startedSubject.next(true);
  }
  public started:boolean = false;
private startedSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private element: ElementRef, private renderer:Renderer2, private cdRef:ChangeDetectorRef) {}
  ngOnInit(){
    // this.renderer.addClass(this.container.nativeElement, "test");
    
  }
  ngAfterViewInit(){
     console.log("AfterViewInit")
    // this.started = true;
    this.startedSubject.next(true);
    setTimeout(()=>{
      this.renderer.removeClass(this.container.nativeElement, "disableScroll");  
    // },5000)
    });
    this.cdRef.detectChanges();
  }
  ngAfterViewChecked(){

  }
}
