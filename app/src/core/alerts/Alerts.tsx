import { useEffect, useContext, useState } from 'react';
import { Alert, AlertTitle, Slide } from '@mui/material';
import { Context } from '../../context/Context';

const Alerts = () => {
  const { alert, setAlert } = useContext(Context);

  const [severity, setSeverity] = useState<'success' | 'error'>('success');
  const [text, setText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setAlert({
      ...alert,
      open: false,
    });

    setOpen(false);
  };

  useEffect(() => {
    setSeverity(alert.severity);
    setText(alert.text);
    setOpen(alert.open);

    if (alert.open && alert.severity == 'success') {
      setTimeout(handleClose, alert.duration ?? 0);
    }
  }, [alert]);

  return (
    <Slide direction='up' in={open} mountOnEnter unmountOnExit>
      <Alert
        severity={severity}
        onClose={handleClose}
        variant='filled'
        sx={{ width: '100%' }}
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          width: 'auto',
          zIndex: 2,
        }}>
        <AlertTitle>
          {severity.substring(0, 1).toUpperCase() + severity.substring(1)}
        </AlertTitle>
        {text}
      </Alert>
    </Slide>
  );
};

export default Alerts;
