import React, { useEffect, useState } from 'react';
import { getBoardList } from '../../api/BoardApi';
import { useNavigate } from 'react-router-dom';

const BoardListComponent = () => {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBoardList().then(response => {
      setBoardList(response.data);
    }).catch(error => {
      console.error("Error fetching board list:", error);
    });
  }, []);

  const handleBoardClick = (id) => {
    navigate(`/board/read/${id}`);
  };

  const handleAddBoardClick = () => {
    navigate('/board/add');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddBoardClick}
        >
          글 작성
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boardList.map((board) => (
          <div key={board.id} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => handleBoardClick(board.id)}>
            <img className="w-full" src={board.imageUrl} alt="Board Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{board.title}</div>
              <p className="text-gray-700 text-base">
                {board.content}
              </p>
              <div className="text-gray-500 text-sm">
                작성자: {board.userNick} / 작성시간: {new Date(board.createdTime).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardListComponent;