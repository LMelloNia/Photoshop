package com.ojt.hyune.service;

import org.modelmapper.ModelMapper;
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

    public Integer register(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);
        User saveUser = userRepository.save(user);
        return saveUser.getUserNo();
    }
}
