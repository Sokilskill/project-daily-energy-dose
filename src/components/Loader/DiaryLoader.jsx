
import { RotatingLines } from 'react-loader-spinner';
import '../../index.css'

const MyLoader = ({ display }) => (
  <div
    style={{
      display: display,
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <RotatingLines
      strokeColor= {`var(--white)`}
      strokeWidth="5"
      animationDuration="0.75"
      width="20%"
      visible={true}
    />
  </div>
);

export default MyLoader;
