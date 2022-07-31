/**
 * che giấu dữ liệu và chỉ bắn ra nhưng phương thức cần thiết
 * forwardRef: forwardRef là một method cho phép các 
 * components cha truyền các refs (tham chiếu) xuống các component con của chúng.
 */

import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./video/download.mp4";
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    }
  }));
  return <video ref={videoRef} src={video1} width={250} />;
}
export default forwardRef(Video);
