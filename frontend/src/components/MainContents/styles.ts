import { Box, InputGroup } from '@chakra-ui/react';
import styled from '@emotion/styled';

// 共通のスタイル
export const CommonStyled = styled(Box)`
  input,
  div {
    fontsize: 14px;
  }
  button {
    width: 100px;
  }
  input {
    border-color: black;
  }
`;

export const CookBookHeader = styled(Box)`
  width: 6rem;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #afeeee;
`;
