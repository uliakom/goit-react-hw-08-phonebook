import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 20px;
  }

  lable {
    display: block;
    font-size: 14px;
    display: block;
    margin-top: 30px;
  }

  input {
    display: block;
    width: 300px;
    height: 20px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-width: 3px;
    border-image: linear-gradient(to left, #00223E, #FFA17F);
    border-image-slice: 1;
    background: transparent;
  }

  button {
    display: block;
    margin: 0 auto 20px auto;
    width: 110px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    font-size: 14px;
    background: background: #FFA17F;  /* fallback for old browser */
background: -webkit-linear-gradient(to left, #00223E, #FFA17F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #00223E, #FFA17F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    &:hover,
    &:focus {
      transform: scale(1.1);
      /* autoprefixer: off */
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
    }
  }
`;
