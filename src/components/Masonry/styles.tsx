import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Container = styled(motion.div)`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
`;

export const Column = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  position: relative;
`;

export const MasonryItemWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
