import { Component, Provide, Vue } from 'vue-property-decorator';

import UserService from '@/entities/user/user.service';
import PokemonService from './pokemon/pokemon.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('userService') private userService = () => new UserService();
  @Provide('pokemonService') private pokemonService = () => new PokemonService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
