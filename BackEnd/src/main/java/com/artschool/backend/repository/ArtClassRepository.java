package com.artschool.backend.repository;

import com.artschool.backend.model.ArtClass;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtClassRepository extends JpaRepository<ArtClass, Long> {
}