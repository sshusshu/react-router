import qs from "qs";

export const About = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초를 실습해봐요</p>
      {detail && <p>추가정보</p>}
    </div>
  );
};
