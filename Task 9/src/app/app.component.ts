import { Component } from '@angular/core';
// import { interval, Observable, refCount, Subject, Subscription } from 'rxjs';
import { interval, Observable, Subject, multicast, refCount,Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDestroy:Subscription | undefined;
  title = 'multicast';
}


// const myObj$=new Observable(obs=> {
//    console.log("Start observable");
//    obs.next('100');
//    obs.next('200');
//   //  obs.error("Not working");
//    obs.next('300');
//   //  obs.complete();
//    obs.next('400');
//    setTimeout(()=>{
//     obs.next('500');
// },1000);
//    console.log("End observable");
// });

// const myDestroy=myObj$.subscribe((sub: any) =>{
//   console.log("First " +sub);
//   },
//     err =>{
//     console.log("Error " +err);
//    },
//     ()=>{
//     console.log("Completed");
//     }
// );
//   myDestroy.unsubscribe();
 
const source = interval(500);
const subject = new Subject();
const refCounted = source.pipe(multicast(subject), refCount());
let subscription1: Subscription, subscription2: Subscription;
 
// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed');
subscription1 = refCounted.subscribe({
  next: (v) => console.log(`observer A: ${v}`),
});
 
setTimeout(() => {
  console.log('observerB subscribed');
  subscription2 = refCounted.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });
}, 600);
 
setTimeout(() => {
  console.log('observerA unsubscribed');
  subscription1.unsubscribe();
}, 2000);
 
// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log('observerB unsubscribed');
  subscription2.unsubscribe();
}, 3000);
 


