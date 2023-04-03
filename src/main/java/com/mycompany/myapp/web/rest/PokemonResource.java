package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Pokemon;
import com.mycompany.myapp.repository.PokemonRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Pokemon}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PokemonResource {

    private final Logger log = LoggerFactory.getLogger(PokemonResource.class);

    private final PokemonRepository pokemonRepository;

    public PokemonResource(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    /**
     * {@code GET  /pokemon} : get all the pokemon.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of pokemon in body.
     */
    @GetMapping("/pokemon")
    public ResponseEntity<List<Pokemon>> getAllPokemon(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Pokemon");
        Page<Pokemon> page = pokemonRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /pokemon/:id} : get the "id" pokemon.
     *
     * @param id the id of the pokemon to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the pokemon, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/pokemon/{id}")
    public ResponseEntity<Pokemon> getPokemon(@PathVariable Long id) {
        log.debug("REST request to get Pokemon : {}", id);
        Optional<Pokemon> pokemon = pokemonRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(pokemon);
    }
}
