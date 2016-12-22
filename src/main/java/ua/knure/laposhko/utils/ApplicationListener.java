package ua.knure.laposhko.utils;

import org.springframework.context.event.ContextRefreshedEvent;

public class ApplicationListener implements org.springframework.context.ApplicationListener<ContextRefreshedEvent>{
    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

    }
}
