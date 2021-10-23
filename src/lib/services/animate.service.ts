import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() { }

  sidebarAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginLeft: '-300px' },
          { marginLeft: '0px' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginLeft: '0px' },
          { marginLeft: '-300px' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  sideUsersAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginRight: '-200px' },
          { marginRight: '0px' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginRight: '0px' },
          { marginRight: '-200px' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  answerAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { height: '0px' },
          { height: '70px' },
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { height: '70px' },
          { height: '0px' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  btnMenuUsersAnimate( element: any, action: string ) {
    if( action === 'big' ) {
      element.animate([
          { width: '150px' },
          { width: '200px' },
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'small' ) {
        element.animate([
          { width: '200px' },
          { width: '150px' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  iconMenuAnimate( element: any, action: string ) {
    if( action === 'in' ) {
      element.animate([
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(180deg)' },
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'out' ) {
        element.animate([
          { transform: 'rotate(180deg)' },
          { transform: 'rotate(0deg)' },
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  menuMovilAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginLeft: '-100%' },
          { marginLeft: '0%' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginLeft: '0%' },
          { marginLeft: '-100%' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  chatWindowAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { opacity: '0' },
          { opacity: '1' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { opacity: '1' },
          { opacity: '0' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }
}
