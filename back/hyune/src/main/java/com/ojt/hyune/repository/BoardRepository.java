package com.ojt.hyune.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojt.hyune.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
}