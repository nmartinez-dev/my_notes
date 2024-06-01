import { FC } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { ModalConfirmInterface } from '../../types';

const ModalConfirm: FC<ModalConfirmInterface> = (props) => {
  const { open, setOpen, onConfirm } = props;

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
            sx={{ color: '#ffffff', width: 100 }}
            onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            sx={{ color: '#ffffff', width: 100 }}
            onClick={onConfirm}>
            Aceptar
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirm;
