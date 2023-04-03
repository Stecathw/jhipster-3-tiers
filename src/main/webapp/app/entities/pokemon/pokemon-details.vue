<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="pokemon">
        <h2 class="jh-entity-heading" data-cy="pokemonDetailsHeading"><span>Pokemon</span> {{ pokemon.id }}</h2>
        <dl class="row jh-entity-details">
          <dt>
            <span>Name</span>
          </dt>
          <dd>
            <span>{{ pokemon.name }}</span>
          </dd>
          <dt>
            <span>Force</span>
          </dt>
          <dd>
            <span>{{ pokemon.force }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./pokemon-details.component.ts"></script>
