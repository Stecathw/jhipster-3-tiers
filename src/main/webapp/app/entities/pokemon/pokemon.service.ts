import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IPokemon } from '@/shared/model/pokemon.model';

const baseApiUrl = 'api/pokemon';

export default class PokemonService {
  public find(id: number): Promise<IPokemon> {
    return new Promise<IPokemon>((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
