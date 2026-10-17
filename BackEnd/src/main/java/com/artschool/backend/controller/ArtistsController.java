
package com.artschool.backend.controller;

import com.artschool.backend.model.Artist;
import com.artschool.backend.repository.ArtistsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Artists")
public class ArtistsController {

    private final ArtistsRepository artistsRepository;

    public ArtistsController(
            ArtistsRepository artistsRepository) {
        this.artistsRepository = artistsRepository;
    }

    @GetMapping
    public List<Artist> getAllArtists() {
        return artistsRepository.findAll();
    }
}
