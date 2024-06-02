import { FC } from 'react';
import { Modal, Box, Fade, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { ModalFormInterface } from '../../types';

const ModalForm: FC<ModalFormInterface> = (props) => {
  const {
    open = false,
    resetForm = () => {},
    headerTitle = 'Agregar',
    onModalSubmit = () => {},
    children,
  } = props;

  const theme = useTheme();

  return (
    <Modal closeAfterTransition open={open} onClose={resetForm} data-testid={'modal_form'}>
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            width: '40%',
            bgcolor: 'background.paper',
            borderRadius: 5,
            maxHeight: '100%',
            overflow: 'auto',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '8vh',
              backgroundColor: theme.palette.primary.dark,
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              paddingRight: 5,
              paddingLeft: 20,
              fontSize: 18,
            }}>
            <div>{headerTitle}</div>
            <IconButton onClick={resetForm}>
              <CloseIcon fontSize='medium' color='primary' />
            </IconButton>
          </div>

          <div
            style={{
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              padding: 10,
              paddingTop: 20,
            }}>
            {children}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 20,
            }}>
            <Button
              id='cancel_button'
              data-testid='cancel_button'
              variant='contained'
              sx={{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.main,
                width: 100,
                fontWeight: 'bold',
              }}
              onClick={resetForm}>
              Cancelar
            </Button>
            <Button
              id='save_button'
              data-testid='save_button'
              variant='contained'
              sx={{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.main,
                width: 100,
                fontWeight: 'bold',
                marginLeft: 2,
              }}
              onClick={onModalSubmit}>
              Guardar
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalForm;
