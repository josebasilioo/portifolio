import styled from 'styled-components';

interface HoverProps {
  focused: boolean | number;
}

export const SelectorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 80%;
  height: auto;
  border-radius: 8px;
  padding: 4px 16px;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const Hover = styled.div<HoverProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  z-index: 0;
  background-color: ${({ focused }) => focused && '#4831d4'};

  &:hover,
  &:focus-within {
    background-color: #4831d4;
  }

  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: #2d1aa3;
  padding: 4px 16px;

  @media (max-width: 480px) {
    padding: 4px 8px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: fit-content;
  height: 100%;

  @media (max-width: 863px) {
    gap: 4px;
  }
`;

export const Text = styled.p`
  font-size: 1.775rem;
  font-weight: 700;
  color: white;

  @media (max-width: 863px) {
    font-size: 1.325rem;
  }

  @media (max-width: 620px) {
    font-size: 1.125rem;
  }
`;
