import styled from '@emotion/styled';

export const Container = styled.div`
position: relative;
  width: 400px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 4px;

  form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    row-gap: 10px;
  }

  label{
    display: flex;
    justify-content: center;
    flex-direction: column;
    span{
        font-size: 13px;
    }
  }

  input {
    width: 200px;
    height: 20px;
    border-image: linear-gradient(to left, #00223E, #FFA17F);
    border-image-slice: 1;
    background: transparent;
    font-size: 16px;
  }

  button {
    display: block;
    margin: 20px auto 20px auto;
    width: 100px;
    height: 30px;
    text-align: center;
    font-size: 16px;
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
    }
  }
`;
