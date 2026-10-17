

package com.artschool.backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "artist_artworks")
public class ArtistArtwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;


    @Column(name = "art_name")
    private String artName;

    @Column(name = "art_image")
    private String artImage;

    @Column(name = "art_date")
    private LocalDate artDate;

    private String description;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public ArtistArtwork() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public String getArtName() {
        return artName;
    }

    public void setArtName(String artName) {
        this.artName = artName;
    }

    public String getArtImage() {
        return artImage;
    }

    public void setArtImage(String artImage) {
        this.artImage = artImage;
    }

    public LocalDate getArtDate() {
        return artDate;
    }

    public void setArtDate(LocalDate artDate) {
        this.artDate = artDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
