
package com.artschool.backend.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "profile_image")
    private String profileImage;

    private String specialization;

    private String bio;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    
    @JsonManagedReference
    @OneToMany(
       mappedBy = "artist",
       cascade = CascadeType.ALL,
       orphanRemoval = true
    )
    private List<ArtistArtwork> artworks;


    public Artist() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<ArtistArtwork> getArtworks() {
        return artworks;
    }

    public void setArtworks(List<ArtistArtwork> artworks) {
        this.artworks = artworks;
    }
}
