import { Button, ButtonProps } from '@chakra-ui/react';

import { Colors } from '../../../const/colors';

export const CancelButton: React.FC<ButtonProps> = (props) => {
  const buttonProps = {
    ...props,
    ...(props.width ? {} : { width: '100px' }),
  };
  return (
    <Button
      bg={`linear-gradient(${Colors.red1}, ${Colors.red2})`}
      _hover={{ opacity: 0.5 }}
      _active={{
        bg: '#ff6347',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      {...buttonProps}
    >
      {props.children}
    </Button>
  );
};

export const SubmitButton: React.FC<ButtonProps> = (props) => {
  const buttonProps = {
    ...props,
    ...(props.w ? {} : { w: '100px' }),
  };
  return (
    <Button
      bg={`linear-gradient(${Colors.green1}, ${Colors.green2})`}
      _hover={{ opacity: 0.5 }}
      _active={{
        bg: '#3cb371',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      type={'submit'}
      {...buttonProps}
    >
      {props.children}
    </Button>
  );
};

export const EditButton: React.FC<ButtonProps> = (props) => {
  const buttonProps = {
    ...props,
    ...(props.width ? {} : { width: '100px' }),
  };
  return (
    <Button
      bg={Colors.black}
      _hover={{ opacity: 0.5 }}
      _active={{
        bg: '#696969',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      {...buttonProps}
    >
      {props.children}
    </Button>
  );
};
