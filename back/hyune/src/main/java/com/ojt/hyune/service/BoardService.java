package com.ojt.hyune.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ojt.hyune.domain.Board;
import com.ojt.hyune.dto.BoardDTO;
import com.ojt.hyune.repository.BoardRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    public Board createBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        return boardRepository.save(board);
    }

    public List<BoardDTO> getBoardList() {
        return boardRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public BoardDTO getBoardById(Integer id) {
        Optional<Board> board = boardRepository.findById(id);
        return board.map(this::convertToDTO).orElse(null);
    }

    private Board convertToEntity(BoardDTO boardDTO) {
        Board board = new Board();
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setUserNick(boardDTO.getUserNick());
        board.setUserId(boardDTO.getUserId());
        board.setImageUrl(boardDTO.getImageUrl());
        return board;
    }

    private BoardDTO convertToDTO(Board board) {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setId(board.getId());
        boardDTO.setTitle(board.getTitle());
        boardDTO.setContent(board.getContent());
        boardDTO.setUserNick(board.getUserNick());
        boardDTO.setUserId(board.getUserId());
        boardDTO.setImageUrl(board.getImageUrl());
        boardDTO.setCreatedTime(board.getCreatedTime());
        return boardDTO;
    }
}