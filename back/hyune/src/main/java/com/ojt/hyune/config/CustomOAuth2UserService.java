package com.ojt.hyune.config;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.ojt.hyune.repository.UserRepository;

import lombok.extern.log4j.Log4j2;

import com.ojt.hyune.domain.User;
import com.ojt.hyune.jwt.JwtUtil;

import java.util.Collections;
import java.util.Map;

@Log4j2
@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails()
            .getUserInfoEndpoint().getUserNameAttributeName();

        Map<String, Object> attributes = oAuth2User.getAttributes();
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

        String email = (String) response.get("email");
        String name = (String) response.get("nickname");
        User user = userRepository.findByUserId(email)
            .orElseGet(() -> {
                User newUser = User.builder()
                    .userId(email)
                    .userNick(name)
                    .build();
                User saveUser =  userRepository.save(newUser);
                return saveUser;
            });

        return new CustomOAuth2User(
            Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")),
            attributes,
            userNameAttributeName,
            user
        );
    }
}