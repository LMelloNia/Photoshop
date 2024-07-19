import React, { useState, useEffect } from 'react';
import { getUserIdFromToken, getUserNickFromToken } from '../../util/jwtDecode';
import { uploadBoard } from '../../api/BoardApi';
import { getUserImages } from '../../api/ImageApi';
import { useNavigate } from 'react-router-dom';

const BoardAddComponent = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [imageList, setImageList] = useState([]);
    const userId = getUserIdFromToken();
    const userNick = getUserNickFromToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            alert("로그인이 필요합니다.");
            navigate("/login");
          } else {
            console.log(userId)
            getUserImages(userId)
                .then(response => {
                    setImageList(response);
                })
                .catch(error => {
                    console.error("Error fetching images:", error);
                });
          }
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const boardData = {
            title,
            content,
            userNick: userNick,
            userId: userId,
            imageUrl: image
        };

        try {
            const response = await uploadBoard(boardData);
            console.log("Board uploaded successfully:", response);
            navigate('/board');
        } catch (error) {
            console.error("Error uploading board:", error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        제목
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        내용
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        이미지 선택
                    </label>
                    <select
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">이미지를 선택하세요</option>
                        {imageList.map((img) => (
                            <option key={img.id} value={`http://localhost:8282/upload/${img.imageName}`}>
                                {img.virtualName}
                            </option>
                        ))}
                    </select>
                </div>
                {image && <img src={image} alt="Selected" className="mb-4" />}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        작성
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BoardAddComponent;