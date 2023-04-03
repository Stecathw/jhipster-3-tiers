<template>
  <div>
    <h2 id="page-heading" data-cy="PokemonHeading">
      <span id="pokemon-heading">Pokemon</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" v-on:click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon> <span>Refresh List</span>
        </button>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && pokemon && pokemon.length === 0">
      <span>No pokemon found</span>
    </div>
    <div class="table-responsive" v-if="pokemon && pokemon.length > 0">
      <table class="table table-striped" aria-describedby="pokemon">
        <thead>
          <tr>
            <th scope="row" v-on:click="changeOrder('id')">
              <span>ID</span> <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'id'"></jhi-sort-indicator>
            </th>
            <th scope="row" v-on:click="changeOrder('name')">
              <span>Name</span> <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'name'"></jhi-sort-indicator>
            </th>
            <th scope="row" v-on:click="changeOrder('force')">
              <span>Force</span>
              <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'force'"></jhi-sort-indicator>
            </th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in pokemon" :key="pokemon.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'PokemonView', params: { pokemonId: pokemon.id } }">{{ pokemon.id }}</router-link>
            </td>
            <td>{{ pokemon.name }}</td>
            <td>{{ pokemon.force }}</td>
            <td class="text-right">
              <div class="btn-group">
                <router-link :to="{ name: 'PokemonView', params: { pokemonId: pokemon.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline">View</span>
                  </button>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
        <infinite-loading
          ref="infiniteLoading"
          v-if="totalItems > itemsPerPage"
          :identifier="infiniteId"
          slot="append"
          @infinite="loadMore"
          force-use-infinite-wrapper=".el-table__body-wrapper"
          :distance="20"
        >
        </infinite-loading>
      </table>
    </div>
    <b-modal ref="removeEntity" id="removeEntity">
      <span slot="modal-title"
        ><span id="jhipsterApp.pokemon.delete.question" data-cy="pokemonDeleteDialogHeading">Confirm delete operation</span></span
      >
      <div class="modal-body">
        <p id="jhi-delete-pokemon-heading">Are you sure you want to delete this Pokemon?</p>
      </div>
      <div slot="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
        <button
          type="button"
          class="btn btn-primary"
          id="jhi-confirm-delete-pokemon"
          data-cy="entityConfirmDeleteButton"
          v-on:click="removePokemon()"
        >
          Delete
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./pokemon.component.ts"></script>
