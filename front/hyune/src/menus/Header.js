import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = !!sessionStorage.getItem('accessToken');

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    window.location.reload(); // 로그아웃 후 페이지를 새로고침하여 상태를 업데이트
  };

  return (
    <header className="bg-gray-100 border-b border-gray-300 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="text-gray-800 hover:text-gray-600">메인페이지</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/board" className="text-gray-800 hover:text-gray-600">게시판</Link>
          <Link to="/image-editor" className="text-gray-800 hover:text-gray-600">이미지편집기</Link>
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-800 hover:text-gray-600 cursor-pointer" onClick={handleLogout}>로그아웃</span>
              {/* <Link to="/mypage" className="text-gray-800 hover:text-gray-600">마이페이지</Link> */}
            </>
          ) : (
            <Link to="/login" className="text-gray-800 hover:text-gray-600">로그인</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;