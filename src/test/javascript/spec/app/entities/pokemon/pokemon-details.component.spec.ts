/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import VueRouter from 'vue-router';

import * as config from '@/shared/config/config';
import PokemonDetailComponent from '@/entities/pokemon/pokemon-details.vue';
import PokemonClass from '@/entities/pokemon/pokemon-details.component';
import PokemonService from '@/entities/pokemon/pokemon.service';
import router from '@/router';
import AlertService from '@/shared/alert/alert.service';

const localVue = createLocalVue();
localVue.use(VueRouter);

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Pokemon Management Detail Component', () => {
    let wrapper: Wrapper<PokemonClass>;
    let comp: PokemonClass;
    let pokemonServiceStub: SinonStubbedInstance<PokemonService>;

    beforeEach(() => {
      pokemonServiceStub = sinon.createStubInstance<PokemonService>(PokemonService);

      wrapper = shallowMount<PokemonClass>(PokemonDetailComponent, {
        store,
        localVue,
        router,
        provide: { pokemonService: () => pokemonServiceStub, alertService: () => new AlertService() },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPokemon = { id: 123 };
        pokemonServiceStub.find.resolves(foundPokemon);

        // WHEN
        comp.retrievePokemon(123);
        await comp.$nextTick();

        // THEN
        expect(comp.pokemon).toBe(foundPokemon);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundPokemon = { id: 123 };
        pokemonServiceStub.find.resolves(foundPokemon);

        // WHEN
        comp.beforeRouteEnter({ params: { pokemonId: 123 } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.pokemon).toBe(foundPokemon);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        comp.previousState();
        await comp.$nextTick();

        expect(comp.$router.currentRoute.fullPath).toContain('/');
      });
    });
  });
});
