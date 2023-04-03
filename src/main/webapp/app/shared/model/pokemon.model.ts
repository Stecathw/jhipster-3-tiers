export interface IPokemon {
  id?: number;
  name?: string | null;
  force?: number | null;
}

export class Pokemon implements IPokemon {
  constructor(public id?: number, public name?: string | null, public force?: number | null) {}
}
