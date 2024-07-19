package com.ojt.hyune.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojt.hyune.domain.Board;
import com.ojt.hyune.dto.BoardDTO;
import com.ojt.hyune.service.BoardService;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/list")
    public List<BoardDTO> getBoardList() {
        return boardService.getBoardList();
    }

    @GetMapping("/{id}")
    public BoardDTO getBoardById(@PathVariable Integer id) {
        return boardService.getBoardById(id);
    }

    @PostMapping("/create")
    public Board createBoard(@RequestBody BoardDTO boardDTO) {
        return boardService.createBoard(boardDTO);
    }
}