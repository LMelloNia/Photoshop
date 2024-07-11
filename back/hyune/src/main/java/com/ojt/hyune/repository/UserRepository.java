package com.ojt.hyune.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojt.hyune.domain.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
