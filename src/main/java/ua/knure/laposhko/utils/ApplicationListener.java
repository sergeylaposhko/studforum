package ua.knure.laposhko.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import ua.knure.laposhko.domain.User;
import ua.knure.laposhko.domain.UserProfile;
import ua.knure.laposhko.repository.UserProfileRepository;
import ua.knure.laposhko.repository.UserRepository;

import java.util.Optional;

@Component
public class ApplicationListener implements org.springframework.context.ApplicationListener<ContextRefreshedEvent>{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserProfileRepository userProfileRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        Optional<User> admin = userRepository.findOneByLogin("admin");
        admin.get().setEmail("admin@mail.com");
        userRepository.save(admin.get());

        UserProfile s = new UserProfile();
        s.setEmail("admin@mail.com");
        userProfileRepository.save(s);

    }
}
