package com.ojt.hyune.service;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ojt.hyune.domain.User;
import com.ojt.hyune.dto.UserDTO;
import com.ojt.hyune.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder passwordEncoder;

    public Integer register(UserDTO userDTO) {
        userDTO.setUserPassword(passwordEncoder.encode(userDTO.getUserPassword()));
        User user = modelMapper.map(userDTO, User.class);
        User saveUser = userRepository.save(user);
        return saveUser.getUserNo();
    }

    public UserDTO findByUserId(String userId) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with userId: " + userId));
        return modelMapper.map(user, UserDTO.class);
    }
}
