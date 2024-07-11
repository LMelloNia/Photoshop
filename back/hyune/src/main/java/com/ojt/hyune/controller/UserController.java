package com.ojt.hyune.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ojt.hyune.dto.UserDTO;
import com.ojt.hyune.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private UserService service;

    public String register(UserDTO userDTO) {
        service.register(userDTO);
        return "SUCCEC";
    }
}
