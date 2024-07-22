import { useEffect, useRef, useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import { getUserIdFromToken } from '../../util/jwtDecode';
import { saveAs } from 'file-saver';
import { uploadImage, getUserImages } from '../../api/ImageApi';

var locale_ko_KR = {
  Apply: '적용',
  Arrow: '화살표',
  'Arrow-2': '화살표-2',
  'Arrow-3': '화살표-3',
  Blend: '혼합',
  Blur: '흐림',
  Bold: '굵게',
  Brightness: '밝기',
  Bubble: '말풍선',
  Cancel: '취소',
  Center: '중앙',
  Circle: '원',
  Color: '색상',
  'Color Filter': '색상 필터',
  Crop: '자르기',
  Custom: '사용자 정의',
  'Custom icon': '사용자 정의 아이콘',
  Delete: '삭제',
  DeleteAll: '모두 삭제',
  Distance: '거리',
  Download: '다운로드',
  Draw: '그리기',
  Emboss: '엠보스',
  Fill: '채우기',
  Filter: '필터',
  Flip: '뒤집기',
  'Flip X': 'X축 뒤집기',
  'Flip Y': 'Y축 뒤집기',
  Free: '자유',
  Grayscale: '흑백',
  Heart: '하트',
  Icon: '아이콘',
  Invert: '반전',
  Italic: '기울임꼴',
  Left: '왼쪽',
  Load: '불러오기',
  'Load Mask Image': '마스크 이미지 불러오기',
  Location: '위치',
  Mask: '마스크',
  Multiply: '곱하기',
  Noise: '노이즈',
  Pixelate: '픽셀화',
  Polygon: '다각형',
  Range: '범위',
  Rectangle: '사각형',
  Redo: '다시 실행',
  'Remove White': '흰색 제거',
  Reset: '초기화',
  Right: '오른쪽',
  Rotate: '회전',
  Sepia: '세피아',
  Sepia2: '세피아2',
  Shape: '모양',
  Sharpen: '선명하게',
  Square: '정사각형',
  'Star-1': '별-1',
  'Star-2': '별-2',
  Straight: '직선',
  Stroke: '윤곽선',
  Text: '텍스트',
  'Text size': '텍스트 크기',
  Threshold: '임계값',
  Tint: '색조',
  Triangle: '삼각형',
  Underline: '밑줄',
  Undo: '실행 취소',
  Value: '값',
  ZoomIn: '확대',
  ZoomOut: '축소',
  History: '기록'
};

const ImageEditorComponent = () => {
  const editorRef = useRef(null);
  const [virtualName, setVirtualName] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (!userId) {
      alert("로그인이 필요합니다.");
      window.location.href = "/login";
    } else {
      getUserImages(userId)
        .then(response => {
          if (response.length > 0) {
            setImageList(response);
          }
        })
        .catch(error => {
          console.error("Error loading images:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (imageUrl && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.loadImageFromURL(imageUrl, 'Loaded Image')
        .then(() => {
          console.log("Image loaded successfully");
        })
        .catch(error => {
          console.error("Error loading image:", error);
        });
    }
  }, [imageUrl]);



  const handleSaveImage = async () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const dataURL = editorInstance.toDataURL();

      const userId = getUserIdFromToken();

      const imageUploadRequest = {
        image: dataURL,
        userId: userId,
        virtualName: virtualName
      };

      try {
        const response = await uploadImage(imageUploadRequest);
        console.log("Image uploaded successfully:", response);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleNameChange = (e) => {
    setVirtualName(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedVirtualName = e.target.value;
    const selectedImageObject = imageList.find(img => img.virtualName === selectedVirtualName);
    if (selectedImageObject) {
      setImageUrl(`http://localhost:8282/upload/${selectedImageObject.imageName}`);
      setSelectedImage(selectedVirtualName);
    }
  };

  return (
    <div className="flex">
      <ImageEditor
        ref={editorRef}
        includeUI={{
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage',
          },
          locale: locale_ko_KR,
          menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={700}
        cssMaxWidth={1000}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
      <div className="flex flex-col items-start ml-4">
        <select
          value={selectedImage}
          onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        >
          {imageList.map(img => (
            <option key={img.imageName} value={img.virtualName}>
              {img.virtualName}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="저장할 이름 입력"
          value={virtualName}
          onChange={handleNameChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />
        <button
          onClick={handleSaveImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          이미지 저장
        </button>
      </div>
    </div>
  );
}

export default ImageEditorComponent;