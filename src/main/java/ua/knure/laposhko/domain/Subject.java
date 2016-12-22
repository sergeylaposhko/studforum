package ua.knure.laposhko.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Subject.
 */
@Entity
@Table(name = "subject")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class Subject implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "teacher")
    private String teacher;

    @OneToMany(mappedBy = "subject")
    @JsonIgnore
    private Set<Activity> activities = new HashSet<>();

    @OneToMany(mappedBy = "subject")
    @JsonIgnore
    private Set<Question> questions = new HashSet<>();

    @OneToMany(mappedBy = "subject")
    private Set<Feedback> feedbacks = new HashSet<>();

    @ManyToMany(mappedBy = "subjects")
    @JsonIgnore
    private Set<UserProfile> profiles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Subject name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Subject description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTeacher() {
        return teacher;
    }

    public Subject teacher(String teacher) {
        this.teacher = teacher;
        return this;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public Set<Activity> getActivities() {
        return activities;
    }

    public Subject activities(Set<Activity> activities) {
        this.activities = activities;
        return this;
    }

    public Subject addActivity(Activity activity) {
        activities.add(activity);
        activity.setSubject(this);
        return this;
    }

    public Subject removeActivity(Activity activity) {
        activities.remove(activity);
        activity.setSubject(null);
        return this;
    }

    public void setActivities(Set<Activity> activities) {
        this.activities = activities;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public Subject questions(Set<Question> questions) {
        this.questions = questions;
        return this;
    }

    public Subject addQuestion(Question question) {
        questions.add(question);
        question.setSubject(this);
        return this;
    }

    public Subject removeQuestion(Question question) {
        questions.remove(question);
        question.setSubject(null);
        return this;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public Set<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public Subject feedbacks(Set<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
        return this;
    }

    public Subject addFeedback(Feedback feedback) {
        feedbacks.add(feedback);
        feedback.setSubject(this);
        return this;
    }

    public Subject removeFeedback(Feedback feedback) {
        feedbacks.remove(feedback);
        feedback.setSubject(null);
        return this;
    }

    public void setFeedbacks(Set<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public Set<UserProfile> getProfiles() {
        return profiles;
    }

    public Subject profiles(Set<UserProfile> userProfiles) {
        this.profiles = userProfiles;
        return this;
    }

    public Subject addProfile(UserProfile userProfile) {
        profiles.add(userProfile);
        userProfile.getSubjects().add(this);
        return this;
    }

    public Subject removeProfile(UserProfile userProfile) {
        profiles.remove(userProfile);
        userProfile.getSubjects().remove(this);
        return this;
    }

    public void setProfiles(Set<UserProfile> userProfiles) {
        this.profiles = userProfiles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Subject subject = (Subject) o;
        if (subject.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, subject.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Subject{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", description='" + description + "'" +
            ", teacher='" + teacher + "'" +
            '}';
    }
}
