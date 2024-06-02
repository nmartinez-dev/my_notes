import { FC } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ModalConfirmInterface } from '../../types';

const ModalConfirm: FC<ModalConfirmInterface> = (props) => {
  const { open, setOpen, onConfirm } = props;

  const theme = useTheme();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle> ¿Desea eliminar la nota? </DialogTitle>
      <DialogActions>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.main,
              width: 100,
              fontWeight: 'bold',
            }}
            onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.main,
              width: 100,
              fontWeight: 'bold',
            }}
            onClick={onConfirm}>
            Aceptar
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirm;
