package com.ojt.hyune.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ojt.hyune.domain.AuthRequest;
import com.ojt.hyune.dto.UserDTO;
import com.ojt.hyune.jwt.JwtUtil;
import com.ojt.hyune.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/api/login")
    public String createAuthenticationToken(@RequestBody AuthRequest authRequest) throws Exception {
        UserDTO userDTO = userService.findByUserId(authRequest.getUserId());
        
        if (userDTO == null || !passwordEncoder.matches(authRequest.getUserPassword(), userDTO.getUserPassword())) {
            throw new Exception("Incorrect username or password");
        }

        return jwtUtil.generateToken(userDTO.getUserId());
    }
}