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

  const styles = {
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'flex',
      flexDirection: 'column',
      transform: 'translate(-50%, -50%)',
      boxShadow: 24,
      width: '40%',
      bgcolor: 'background.paper',
      borderRadius: 5,
      maxHeight: '100%',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '8vh',
      backgroundColor: '#000',
      borderTopLeftRadius: 17,
      borderTopRightRadius: 17,
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      paddingRight: 5,
      paddingLeft: 20,
      fontSize: 18,
    },
    body: {
      borderTopLeftRadius: 17,
      borderTopRightRadius: 17,
      padding: 10,
      paddingTop: 20,
    },
    footerButtons: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 20,
    },
  };

  return (
    <Modal closeAfterTransition open={open} onClose={resetForm}>
      <Fade in={open}>
        <Box sx={styles.container}>
          <div style={styles.header}>
            <div>{headerTitle}</div>
            <IconButton onClick={resetForm}>
              <CloseIcon fontSize='medium' color='primary' />
            </IconButton>
          </div>

          <div style={styles.body}>{children}</div>

          <div style={styles.footerButtons}>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#000',
                color: theme.palette.primary.main,
                width: 100,
                fontWeight: 'bold',
              }}
              onClick={resetForm}>
              Cancelar
            </Button>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#000',
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
