package ua.knure.laposhko.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A UserProfile.
 */
@Entity
@Table(name = "user_profile")
public class UserProfile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "pass")
    private String pass;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @ManyToMany
    @JoinTable(name = "user_profile_subject",
               joinColumns = @JoinColumn(name="user_profiles_id", referencedColumnName="ID"),
               inverseJoinColumns = @JoinColumn(name="subjects_id", referencedColumnName="ID"))
    private Set<Subject> subjects = new HashSet<>();

    @OneToMany(mappedBy = "userProfile")
    @JsonIgnore
    private Set<Feedback> feedbacks = new HashSet<>();

    @OneToMany(mappedBy = "userProfile")
    @JsonIgnore
    private Set<Question> questions = new HashSet<>();

    @OneToMany(mappedBy = "userProfile")
    @JsonIgnore
    private Set<Answer> answers = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public UserProfile email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public UserProfile pass(String pass) {
        this.pass = pass;
        return this;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getFirstName() {
        return firstName;
    }

    public UserProfile firstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public UserProfile lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public UserProfile subjects(Set<Subject> subjects) {
        this.subjects = subjects;
        return this;
    }

    public UserProfile addSubject(Subject subject) {
        subjects.add(subject);
        subject.getProfiles().add(this);
        return this;
    }

    public UserProfile removeSubject(Subject subject) {
        subjects.remove(subject);
        subject.getProfiles().remove(this);
        return this;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }

    public Set<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public UserProfile feedbacks(Set<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
        return this;
    }

    public UserProfile addFeedback(Feedback feedback) {
        feedbacks.add(feedback);
        feedback.setUserProfile(this);
        return this;
    }

    public UserProfile removeFeedback(Feedback feedback) {
        feedbacks.remove(feedback);
        feedback.setUserProfile(null);
        return this;
    }

    public void setFeedbacks(Set<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public UserProfile questions(Set<Question> questions) {
        this.questions = questions;
        return this;
    }

    public UserProfile addQuestion(Question question) {
        questions.add(question);
        question.setUserProfile(this);
        return this;
    }

    public UserProfile removeQuestion(Question question) {
        questions.remove(question);
        question.setUserProfile(null);
        return this;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public UserProfile answers(Set<Answer> answers) {
        this.answers = answers;
        return this;
    }

    public UserProfile addAnswer(Answer answer) {
        answers.add(answer);
        answer.setUserProfile(this);
        return this;
    }

    public UserProfile removeAnswer(Answer answer) {
        answers.remove(answer);
        answer.setUserProfile(null);
        return this;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UserProfile userProfile = (UserProfile) o;
        if (userProfile.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, userProfile.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "UserProfile{" +
            "id=" + id +
            ", email='" + email + "'" +
            ", pass='" + pass + "'" +
            ", firstName='" + firstName + "'" +
            ", lastName='" + lastName + "'" +
            '}';
    }
}
