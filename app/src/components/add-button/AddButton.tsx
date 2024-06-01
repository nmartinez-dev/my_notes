import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ButtonIcon from '../../core/button-icon/ButtonIcon';
import './AddButton.css';

const AddButton = () => {
  return (
    <ButtonIcon
      id={'add_card_button'}
      icon={<AddCircleOutlineIcon fontSize='large' />}
      tooltip={'Agregar'}
    />
  );
};

export default AddButton;
