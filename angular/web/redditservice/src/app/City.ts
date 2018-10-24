export class City{
  private _name: string;
  private _state: string;
  private _description: string;
  private _state_short: string;
  constructor(name:string,state:string,description:string,state_short:string){
      this._name=name;
      this._description=description;
      this._state=state;
      this._state_short=state_short;
  }
  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get state_short() {
    return this._state_short;
  }

  set state_short(value) {
    this._state_short = value;
  }
}
