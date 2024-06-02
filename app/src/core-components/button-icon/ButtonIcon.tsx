import { FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { ButtonIconInterface } from '../../types';

const ButtonIcon: FC<ButtonIconInterface> = (props) => {
  const {
    id = 'button_icon',
    icon = null,
    tooltip = '',
    placement = 'top',
    onClick = () => {},
    disabled = false,
  } = props;

  return (
    <Tooltip title={tooltip} placement={placement} arrow>
      <IconButton
        id={id}
        data-testid={id}
        onClick={onClick}
        disabled={disabled}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default ButtonIcon;
