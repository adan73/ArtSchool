package com.artschool.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "events_images")
public class EventsImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_order")
    private Integer imageOrder;

    public EventsImage() {
    }

    public Long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Integer getImageOrder() {
        return imageOrder;
    }
}