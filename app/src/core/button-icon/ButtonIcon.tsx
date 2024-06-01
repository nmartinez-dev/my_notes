import { ReactNode, FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';

interface ButtonIcon {
  id: string;
  icon: ReactNode;
  tooltip?: string;
  placement?: any;
  onClick?: void;
  disabled?: boolean;
}

const ButtonIcon: FC<ButtonIcon> = (props) => {
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
      <IconButton id={id} onClick={onClick} disabled={disabled}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default ButtonIcon;
