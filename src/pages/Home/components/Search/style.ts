import styled from 'styled-components';

export const SearchContainer = styled.form`
  height: 6rem;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: transparent;

  input {
    height: 3.125rem;
    width: 100%;

    font-size: ${(props) => props.theme.FontSize.MD}px;
    border: 0;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const PublicationsAndNumberOfPublications = styled.div`
  height: 2rem;
  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-weight: ${(props) => props.theme.FontWeight.bold};
    font-size: ${(props) => props.theme.FontSize.LG}px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
