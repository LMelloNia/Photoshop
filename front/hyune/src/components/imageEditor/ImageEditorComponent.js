import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
  'common.bi.image': '',
    'common.bisize.width': '0',
    'common.bisize.height': '0',
    'common.backgroundImage': 'none',
    'common.backgroundColor': '#ffffff',
    'common.border': '0px',

    // header
    'header.backgroundImage': 'none',
    'header.backgroundColor': 'transparent',
    'header.border': '0px',

    // load button
    'loadButton.backgroundColor': '#fff',
    'loadButton.border': '1px solid #ddd',
    'loadButton.color': '#222',
    'loadButton.fontFamily': 'NotoSans, sans-serif',
    'loadButton.fontSize': '12px',

    // download button
    'downloadButton.backgroundColor': '#3ba26e',
    'downloadButton.border': '1px solid #3ba26e',
    'downloadButton.color': '#fff',
    'downloadButton.fontFamily': 'NotoSans, sans-serif',
    'downloadButton.fontSize': '12px',

    // icons default
    'menu.normalIcon.color': '#8a8a8a',
    'menu.activeIcon.color': '#555555',
    'menu.disabledIcon.color': '#434343',
    'menu.hoverIcon.color': '#e9e9e9',
    'submenu.normalIcon.color': '#8a8a8a',
    'submenu.activeIcon.color': '#e9e9e9',

    'menu.iconSize.width': '24px',
    'menu.iconSize.height': '24px',
    'submenu.iconSize.width': '32px',
    'submenu.iconSize.height': '32px',

    // submenu primary color
    'submenu.backgroundColor': '#ffffff',
    'submenu.partition.color': '#858585',

    // submenu labels
    'submenu.normalLabel.color': '#000',
    'submenu.normalLabel.fontWeight': 'bold',
    'submenu.activeLabel.color': '#000',
    'submenu.activeLabel.fontWeight': 'bold',

    // checkbox style
    'checkbox.border': '1px solid #ccc',
    'checkbox.backgroundColor': '#fff',

    // rango style
    'range.pointer.color': '#3ba26e',
    'range.bar.color': '#666',
    'range.subbar.color': '#d1d1d1',

    'range.disabledPointer.color': '#ddd',
    'range.disabledBar.color': '#ddd',
    'range.disabledSubbar.color': '#ddd',

    'range.value.color': '#fff',
    'range.value.fontWeight': 'lighter',
    'range.value.fontSize': '11px',
    'range.value.border': '1px solid #353535',
    'range.value.backgroundColor': '#151515',
    'range.title.color': '#fff',
    'range.title.fontWeight': 'lighter',

    // colorpicker style
    'colorpicker.button.border': '1px solid #1e1e1e',
    'colorpicker.title.color': '#fff'
};

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
  return (
    <div className="App">
      <ImageEditor
        includeUI={{
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage',
          },
          locale: locale_ko_KR, // key-value object with localization
          // theme: myTheme,
          menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '1500px',
            height: '1000px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={2000}
        cssMaxWidth={1500}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </div>
  );
}

export default ImageEditorComponent;
