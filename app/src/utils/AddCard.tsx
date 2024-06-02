import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ButtonIcon from '../core-components/button-icon/ButtonIcon';

export const addCard = (handleAddCard: () => void) => ({
  label: '',
  content: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <ButtonIcon
        id={'add_card_button'}
        icon={<AddCircleOutlineIcon fontSize='large' color='primary' />}
        tooltip={'Agregar'}
        onClick={handleAddCard}
      />
    </div>
  ),
  isEmpty: true,
});
