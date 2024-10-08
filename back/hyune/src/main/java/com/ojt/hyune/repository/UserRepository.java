package com.ojt.hyune.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojt.hyune.domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserId(String userId);
}
