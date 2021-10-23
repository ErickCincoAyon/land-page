import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwiperOptions } from 'swiper';
import { AnimateService } from './services/animate.service';

@Component({
  selector: 'lanp-landing-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss']
})
export class LandPageComponent implements OnInit {

  public showMenu: boolean = false;
  @ViewChild('menuMovil', {static: false}) public menuMovil: any;
  @ViewChild('waifu', {static: false}) public waifu: any;
  @ViewChild('roadmap', {static: false}) public roadmap: any;
  @ViewChild('team', {static: false}) public team: any;
  @ViewChild('faq', {static: false}) public faq: any;

  @ViewChild('swiper', { static: false }) swiper?: any;
  public config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
    scrollbar: { draggable: true },
  };
  

  constructor(
    private readonly _animateService: AnimateService,
    private readonly _titleService: Title,
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('WELCOME TO THE ZAKURA X CLUB');
    setInterval(() => { this.swiper.swiperRef.slideNext(1500); }, 2000 );
  }

  slideNext(){
    this.swiper.swiperRef.slideNext(1500);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(1500);
  }

  toggleMenuMovil( value: boolean ) {
    this.showMenu = value;
    if( this.showMenu ) {
      this._animateService.menuMovilAnimate( this.menuMovil.nativeElement, 'show' );
    } else {
      this._animateService.menuMovilAnimate( this.menuMovil.nativeElement, 'hide' );
    }
  }

  sendAction( event: string ) {
    if( event === 'waifu' ) {
      const y = this.waifu.nativeElement.getBoundingClientRect().top + window.pageYOffset + -120;
      window.scrollTo({top: y, behavior: 'smooth'});
      this._titleService.setTitle('ZAKURA X — OPENSEA');
    }
    
    if( event === 'roadmap' ) {
      const y = this.roadmap.nativeElement.getBoundingClientRect().top + window.pageYOffset + -120;
      window.scrollTo({top: y, behavior: 'smooth'});
      this._titleService.setTitle('ZAKURA X — ROADMAP');
    }

    if( event === 'team' ) {
      const y = this.team.nativeElement.getBoundingClientRect().top + window.pageYOffset + -120;
      window.scrollTo({top: y, behavior: 'smooth'});
      this._titleService.setTitle('ZAKURA X — TEAM');
    }

    if( event === 'faq' ) {
      const y = this.faq.nativeElement.getBoundingClientRect().top + window.pageYOffset + -120;
      window.scrollTo({top: y, behavior: 'smooth'});
      this._titleService.setTitle('ZAKURA X — FAQ');
    }

    if( event === 'top' ) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this._titleService.setTitle('WELCOME TO THE ZAKURA X CLUB');
    }
    
  }

  accordionFaq( id: string, text: any ) {
    let listText = document.querySelectorAll('.ul-faq li');
    listText.forEach( elem => elem.classList.remove('selected'));

    text.classList.add('selected');

    let list = document.querySelectorAll('.ul-faq li p');
    list.forEach( elem => {
      if( elem.classList.contains('show-answer') && elem.id !== id ) {
        elem.classList.remove('show-answer');
        this._animateService.answerAnimate( elem, 'hide' );
      }
      if( elem.id === id && !elem.classList.contains('show-answer') ) {
        elem.classList.add('show-answer');
        this._animateService.answerAnimate( elem, 'show' );
      }
    });
  }

}
