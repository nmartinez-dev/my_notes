import { FC } from 'react';
import { Modal, Box, Fade, Button, IconButton } from '@mui/material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
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
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

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
      backgroundColor: theme.palette.primary.main,
      borderTopLeftRadius: 17,
      borderTopRightRadius: 17,
      color: '#ffffff',
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
            <ThemeProvider theme={buttonTheme}>
              <IconButton onClick={resetForm}>
                <CloseIcon fontSize='medium' color='primary' />
              </IconButton>
            </ThemeProvider>
          </div>

          <div style={styles.body}>{children}</div>

          <div style={styles.footerButtons}>
            <Button
              variant='contained'
              sx={{ color: '#ffffff', width: 100 }}
              onClick={resetForm}>
              Cancelar
            </Button>
            <Button
              variant='contained'
              sx={{ color: '#ffffff', marginLeft: 2, width: 100 }}
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
