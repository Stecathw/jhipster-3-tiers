import { Component, Vue, Inject } from 'vue-property-decorator';

import { IPokemon } from '@/shared/model/pokemon.model';
import PokemonService from './pokemon.service';
import AlertService from '@/shared/alert/alert.service';

@Component
export default class PokemonDetails extends Vue {
  @Inject('pokemonService') private pokemonService: () => PokemonService;
  @Inject('alertService') private alertService: () => AlertService;

  public pokemon: IPokemon = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pokemonId) {
        vm.retrievePokemon(to.params.pokemonId);
      }
    });
  }

  public retrievePokemon(pokemonId) {
    this.pokemonService()
      .find(pokemonId)
      .then(res => {
        this.pokemon = res;
      })
      .catch(error => {
        this.alertService().showHttpError(this, error.response);
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
