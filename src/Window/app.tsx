class SingletonApp {
  private static instance: SingletonApp;
  private paths: { [key:string]: string } = {};
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): SingletonApp {
      if (!SingletonApp.instance) {
        SingletonApp.instance = new SingletonApp();
      }

      return SingletonApp.instance;
  }

  public setAppUserModelId(value:String) {

  }

  public getVersion():string {
    return ""; //TODO
  }

  public getPath(value:string):string{
    return this.paths[value];
  }

  public setPath(value:string,path:string){
    this.paths[value] = path;
  }

  public getAppPath():string{
    return ""; //TODO
  }
  public on(event: string, listener: Function) {
    listener(); //TODO
  }

  public quit() {
    
  }

}

export const app = SingletonApp.getInstance();