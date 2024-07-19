import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBoardById } from '../../api/BoardApi';

const BoardReadComponent = () => {
    const { id } = useParams();
    const [board, setBoard] = useState(null);

    useEffect(() => {
        getBoardById(id).then(response => {
            setBoard(response.data);
        }).catch(error => {
            console.error("Error fetching board details:", error);
        });
    }, [id]);

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">{board.title}</h2>
            <div className="mb-4">
                <img src={board.imageUrl} alt="Board Image" className="w-full" />
            </div>
            <div className="mb-4">
                <p className="text-gray-700 text-base">{board.content}</p>
            </div>
            <div className="text-gray-500 text-sm">
                작성자: {board.userNick} / 작성시간: {new Date(board.createdTime).toLocaleString()}
            </div>
        </div>
    );
};

export default BoardReadComponent;