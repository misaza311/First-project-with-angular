import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    @Input() anchura: number;
    // @Input() etiquetas: number;
    @Input('etiquetas') captions: boolean;
    @Output() conseguirAutor = new EventEmitter();
    
    public autor: any;

  constructor(){

    this.autor = {
      nombre: "Mauricio Isaza",
      website: "mauricioisaza.es",
      youtube: "Mauricio Isaza WEB"
    };
   }

  ngOnInit(){
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","green")
                .css("height", "60px");
    });
    
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
    // Lanzar evento
    this.conseguirAutor.emit(this.autor);
  }
  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
