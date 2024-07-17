import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeaveHome($event)'
    }
})
export class SafeLinkDirective{
    queryParam = input('myapp');
    
    private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor(){
        console.log('Safe link is active and working');
    }
    onConfirmLeaveHome(event: MouseEvent){
       const wantsToLeave = window.confirm('Do you want to leave the app?');

       if(wantsToLeave){
        const address = this.hostElement.nativeElement.href;
        this.hostElement.nativeElement.href = address + "?from=" + this.queryParam();
        return;
       }
       event.preventDefault()
    }
}