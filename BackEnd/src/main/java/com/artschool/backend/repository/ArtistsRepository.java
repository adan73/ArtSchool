
package com.artschool.backend.repository;

import com.artschool.backend.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.EntityGraph;
import java.util.List;

public interface ArtistsRepository
        extends JpaRepository<Artist, Integer> {

    @Override
    @EntityGraph(attributePaths = "artworks")
    List<Artist> findAll();
}
