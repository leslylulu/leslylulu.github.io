
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import './index.less';

const Navigator = ({previousUrl, justifyContent}: any) => {
  let navigate = useNavigate();
  const backToPrevious = () => {
    navigate(previousUrl);
  };

  const backToIndex = () => {
    navigate("/");
  };

  return (
    <div className="navi-btn" style={{ justifyContent: justifyContent}}>
      <div className="previous" onClick={backToPrevious}>
        <LeftCircleOutlined />
        <span>上一页</span>
      </div>
      <div className="previous" onClick={backToIndex}>
        <LeftCircleOutlined />
        <span>回到首页</span>
      </div></div>
  );
}

export default Navigator;