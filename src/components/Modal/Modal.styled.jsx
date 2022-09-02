import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  transition: opacity 1200ms, visibility 1000ms;
`;

export const ModalWindow = styled.div`
padding: 10px;
 max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transform: translate(-50%, -50%);
  transition: transform 1000ms;
}`;

export const CloseBtn = styled.button`
    display: block;
      
    font-size: 16px;
    margin-left: 380px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    background: background: #FFA17F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #00223E, #FFA17F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #00223E, #FFA17F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
`;
