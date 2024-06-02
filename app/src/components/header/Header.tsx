import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontSize: '2rem',
        color: theme.palette.primary.dark,
        textAlign: 'center',
        padding: '1.5rem',
        fontWeight: 'bold',
      }}>
      Mis Notas
    </div>
  );
};

export default Header;
