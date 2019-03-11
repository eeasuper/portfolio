import { Component, OnInit, ViewChild,AfterViewInit,Output,Input,OnChanges,ElementRef,Renderer2 } from '@angular/core';
import {Subscription, Observable} from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
  animations: [
    trigger('startingCover',[
      // state('default', style({
      //   opacity: 0,
      //   marginTop: '50%'
      // })),
      // state('starting', style({
      //   opacity: 1,
      //   marginTop: '0%'
      // })),
      transition('* => starting',[
        query('.img',[
          style({opacity:0, marginTop: '-50%'}),
          animate('2s cubic-bezier(0.455, 0.03, 0.515, 0.955)', style({
            opacity: 1
          })),
          stagger('2s', [
            animate('3s cubic-bezier(0.455, 0.03, 0.515, 0.955)', style({
              marginTop: '0%',
              overflow: 'hidden'
            }))
          ])
        ]),
        query('.titles',[
          style({opacity: 0}),
          stagger('0s', [
            animate('4s cubic-bezier(0.455, 0.03, 0.515, 0.955)', style({
              opacity: 1
            }))
          ])
        ])
      ])
    ]),
    trigger('startingTitles', [
      transition('* => starting', [
        query(':self',[
          style({opacity: 0}),
          stagger('5s', [
            animate('4s cubic-bezier(0.455, 0.03, 0.515, 0.955)', style({
              opacity: 1
            }))
          ])
        ])
      ])
    ])
  ]
})
export class TopPageComponent implements OnInit,AfterViewInit,OnChanges {
//https://angular.io/guide/component-interaction#parent-listens-for-child-event
  @ViewChild('topPageCover') private topPageCover:ElementRef;
  @ViewChild('titles') private titles:ElementRef;
  // @Input('start') start:boolean;
  @Input() start:Observable<boolean>;
  private startedSubscription:Subscription;
  private starting:boolean = false;
  private startingTitles:boolean = false;

  constructor(private element: ElementRef, private renderer:Renderer2) {}
  ngOnInit() {
    this.startedSubscription = this.start.subscribe((val)=>{

      if(val){
        console.log(val)
        setTimeout(()=>{
          // console.log("fff")
          // this.starting = true;
          // console.log(this.starting);
          // setTimeout(()=>{
          //   this.startingTitles = true;
          // },5000)
          // this.renderer.addClass(this.topPageCover.nativeElement,"move");
          // this.renderer.addClass(this.titles.nativeElement, "moveTitles");
        },0)
        
      }
    })
  }

  ngAfterViewInit(){

  }
  ngOnChanges(){
    console.log("OnChange")
    // this.renderer.addClass(this.topPageCover.nativeElement,"move")
  }
}
