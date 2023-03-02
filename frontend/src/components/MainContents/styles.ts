import { Box, InputGroup } from '@chakra-ui/react';
import styled from '@emotion/styled';

// 共通のスタイル
export const CommonTableStyled = styled(Box)`
  input,
  div {
    fontsize: 14px;
  }
  button {
    width: 100px;
  }

  //   background-color: ${(props) => (props.disabled ? 'gray' : 'blue')};
`;
