package com.artschool.backend.model;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "classes")
public class ArtClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;

    @Column(name = "age_group")
    private String ageGroup;

    private String description;
    private String teacher;
    @OneToMany
    @JoinColumn(name = "class_id")
    private List<ClassSchedule> schedules;
    public ArtClass() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getAgeGroup() {
        return ageGroup;
    }

    public String getDescription() {
        return description;
    }

    public String getTeacher() {
        return teacher;
    }
    public List<ClassSchedule> getSchedules() {
    return schedules;
    }
}