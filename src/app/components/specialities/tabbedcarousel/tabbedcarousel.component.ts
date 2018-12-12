import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbedcarousel',
  templateUrl: './tabbedcarousel.component.html',
  styleUrls: ['./tabbedcarousel.component.css']
})
export class TabbedcarouselComponent implements OnInit {
curSlide:number=1;
carouselContent;
items;
  constructor() { 

  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.carouselContent = document.querySelector('.carousel-content');
    console.log("car" + this.carouselContent.classList);
    this.items = document.querySelectorAll('.carousel-item');
    document.querySelector('.fa-chevron-left').addEventListener('click', this.showNext, false);  
    document.querySelector('.fa-chevron-right').addEventListener('click', this.showPrev, false); 
  }



showNext(){
  this.items = document.querySelectorAll('.carousel-item');

    // Change order of element
    // Current order 2 visible become order 3
    for(var i = 0, c=this.items.length;i<c;i++){
      if(this.items[i].style.order){ // change order with directio
        var newValue = (parseInt(this.items[i].style.order, 10)+1) % c;
        this.items[i].style.order = newValue ? newValue : c;
      
      } else { // Initialize
        this.items[i].style.order = i+1;
      }
   
}

}
showPrev(){
  this.items = document.querySelectorAll('.carousel-item');
  
 
    // Change order of element
    // Current order 2 visible become order 1    
    for(var i = 0, c=this.items.length;i<c;i++){
      if(this.items[i].style.order){ // change order with direction
        var newValue = (parseInt(this.items[i].style.order, 10) + 1) % c;
        this.items[i].style.order = newValue ? newValue : c;
      
      } else { // Initialize
        this.items[i].style.order = i+1;
      }
    }
    
    
  
    // Enable transition to animate order 1 to order 2
    //setTimeout(this.toggleAnimate, 50);   
}

    
  setOrder(direction){
    if(direction === 'left'){
      direction = 1;
    } else if(direction === "right"){
      direction = -1;
    }
    
    for(var i = 0, c=this.items.length;i<c;i++){
      if(this.items[i].style.order){ // change order with direction
        var newValue = (parseInt(this.items[i].style.order, 10) + direction) % c;
        this.items[i].style.order = newValue ? newValue : c;
      
      } else { // Initialize
        this.items[i].style.order = i+1;
      }
    }
  }




 


}
