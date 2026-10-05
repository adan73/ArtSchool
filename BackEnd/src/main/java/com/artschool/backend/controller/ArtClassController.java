package com.artschool.backend.controller;

import com.artschool.backend.model.ArtClass;
import com.artschool.backend.repository.ArtClassRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/classes")
public class ArtClassController {

    private final ArtClassRepository artClassRepository;

    public ArtClassController(ArtClassRepository artClassRepository) {
        this.artClassRepository = artClassRepository;
    }

    @GetMapping
    public List<ArtClass> getAllClasses() {
        return artClassRepository.findAll();
    }
}