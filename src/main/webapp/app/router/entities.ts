import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore
const Entities = () => import('@/entities/entities.vue');

// prettier-ignore
const Pokemon = () => import('@/entities/pokemon/pokemon.vue');
// prettier-ignore
const PokemonDetails = () => import('@/entities/pokemon/pokemon-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default {
  path: '/',
  component: Entities,
  children: [
    {
      path: '/pokemon',
      name: 'Pokemon',
      component: Pokemon,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: '/pokemon/:pokemonId/view',
      name: 'PokemonView',
      component: PokemonDetails,
      meta: { authorities: [Authority.USER] },
    },
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ],
};
