package ua.knure.laposhko.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import ua.knure.laposhko.domain.*;
import ua.knure.laposhko.repository.*;

import java.time.LocalDate;
import java.util.Optional;

@Component
public class ApplicationListener implements org.springframework.context.ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        Optional<User> admin = userRepository.findOneByLogin("admin");
        admin.get().setEmail("admin@mail.com");
        userRepository.save(admin.get());

        UserProfile s = new UserProfile();
        s.setEmail("admin@mail.com");
        s = userProfileRepository.save(s);

        Subject subject = new Subject();
        subject.setName("Math");
        subject.setDescription("Subject with mathematical exercises.");
        subject = subjectRepository.save(subject);

        Feedback feedback = new Feedback();
        feedback.setText("Cool subject");
        feedback.setCreateDate(LocalDate.now());
        feedback.setUserProfile(s);
        feedback.setSubject(subject);
        feedbackRepository.save(feedback);

        Activity activity = new Activity();
        activity.setSubject(subject);
        activity.setName("Lb1");
        activity.setDescription("Plus operator");
        activity.setWeight(1d);

        activityRepository.save(activity);

        Question question = new Question();
        question.setSubject(subject);
        question.setActivity(activity);
        question.setCreateDate(LocalDate.now());
        question.setUserProfile(s);
        question.setText("Was it difficult?");

        questionRepository.save(question);
    }
}
