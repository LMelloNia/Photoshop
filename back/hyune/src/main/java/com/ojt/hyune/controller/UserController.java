package com.ojt.hyune.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ojt.hyune.dto.UserDTO;
import com.ojt.hyune.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService service;

    @PostMapping("/")
    public String register(@RequestBody UserDTO userDTO) {
        log.info(userDTO.getUserId());
        log.info(userDTO.getUserNick());
        log.info(userDTO.getUserPassword());
        service.register(userDTO);
        return "SUCCEC";
    }
}
