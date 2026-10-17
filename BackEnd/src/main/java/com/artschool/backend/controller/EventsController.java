package com.artschool.backend.controller;

import com.artschool.backend.model.Events;
import com.artschool.backend.repository.EventsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/events")
public class EventsController {

    private final EventsRepository eventsRepository;

    public EventsController(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @GetMapping
    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }
}