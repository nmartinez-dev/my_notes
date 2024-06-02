import { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Context } from '../../context/Context';

const Loader = () => {
  const { loading } = useContext(Context);

  return loading ? (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        textAlign: 'center',
        background: '#ffffffc0',
      }}>
      <div style={{ marginTop: '40vh' }}>
        <CircularProgress size={40} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
