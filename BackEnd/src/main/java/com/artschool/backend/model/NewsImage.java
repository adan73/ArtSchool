package com.artschool.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "news_images")
public class NewsImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_order")
    private Integer imageOrder;

    public NewsImage() {
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