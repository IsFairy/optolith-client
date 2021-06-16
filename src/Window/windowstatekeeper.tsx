import {BrowserWindow} from "./browserwindow"

class State {
  x:number;
  y:number;
  height:number;
  width:number;
  window!:BrowserWindow;
  public constructor(options:Options){
    this.x=0;
    this.y = 0;
    this.height=options.defaultHeight;
    this.width=options.defaultWidth;
  }
  public manage(window:BrowserWindow){
    this.window = window;
  }


  public get isMaximized():boolean{
    return false;
  }
}



interface Options {
  defaultHeight: number,
    defaultWidth: number,
    file: string,
}

export function windowStateKeeper(opts: Options): State{
  return new State(opts);
}