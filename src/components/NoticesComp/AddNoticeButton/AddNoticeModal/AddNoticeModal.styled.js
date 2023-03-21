import { baseColor } from 'components/baseStyles/Variables.styled';
import { Field, Form } from 'formik';
import { ReactComponent as icon } from '../../../../images/svg/icon_close.svg';

import styled from 'styled-components';

export const ModalAddNoticeStyled = styled.div`
position: relative;

width: auto;
height: auto;


  margin-top: 160px;
margin-right: 20px;
margin-left: 20px;
border-radius: 20px;

padding: 40px 20px 40px 20px;

background: ${baseColor.colors.white};




  @media screen and (min-width: 768px) {

  margin-top: 260px;
margin-right: 80px;
margin-left: 80px;
border-radius: 40px;

padding: 40px 80px 40px 80px;

& .btns {
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction: row-reverse;
gap: 20px;
}
  }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
background: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(10px);
    z-index: 1200;
`;

export const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${baseColor.colors.blackText};

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
  font-weight: 600;
  font-size: 36px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
letter-spacing: -0.01em;
  color: ${baseColor.colors.blackText};

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
  font-size: 20px;

  margin-bottom: 28px;

  }
`;
export const ButtonClose = styled.button`
position: absolute;
top: 20px;
right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  margin: 0;
  padding: 0;
border-radius: 50%;
width: 34px;
height: 34px;

background-color: ${baseColor.colors.mainBg};

  @media screen and (min-width: 768px) {
width: 44px;
height: 44px;

  }
`;

export const IconClose = styled(icon)`
  width: 28px;
  height: 28px;
  display: block;
  @media screen and (min-width: 768px) {
  width: 36px;
  height: 36px;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  margin-bottom: 12px;
  padding: 0;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
color: ${baseColor.colors.white};

padding: 10px auto 10px auto;
height: 40px;
width: 100%;

background: ${baseColor.colors.orangeLight};
border-radius: 40px;


&:hover {
border: 2px solid ${baseColor.colors.orangeLight};
};

&:focus {
border: 3px solid ${baseColor.colors.orangeLight};
};

  @media screen and (min-width: 768px) {
height: 44px;
width: 180px;
  margin-bottom: 0;


  font-weight: 500;
  font-size: 20px;

  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: medium none;
  border-spacing: 0;
  padding: 0;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
color: ${baseColor.colors.blackText};

padding: 10px auto 10px auto;
height: 40px;
width: 100%;

background: ${baseColor.colors.white};
border: 2px solid ${baseColor.colors.orangeLight};
border-radius: 40px;


&:hover, &:focus{
border: 3px solid ${baseColor.colors.orangeLight};
};
  @media screen and (min-width: 768px) {
height: 44px;
width: 180px;

  font-weight: 500;
  font-size: 20px;


  }

`;



export const FormStyled = styled(Form)`


  @media screen and (min-width: 768px) {
  }
`;

export const FieldCategories = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
    flex-wrap: wrap;

  width: 100%;
height: 35px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${baseColor.colors.inpText};
&:checked {
  background: ${baseColor.colors.orangeLight};
}


  @media screen and (min-width: 768px) {
  font-size: 20px;

  }
`;

export const LabelCategory = styled.label`
  cursor: pointer;


  display: flex;
  align-items: center;
  justify-content: center;
    border-radius: 40px;

border: 2px solid ${baseColor.colors.orangeLight};

margin-bottom: 12px;
  height: 35px;

  padding: 8px 28px 8px 28px;

  background: ${baseColor.colors.white};
&:checked {
  background: ${baseColor.colors.orangeLight};
}

&:not(:last-child) {
margin-right: 8px;

}

&:hover, &:focus {
border: 3px solid ${baseColor.colors.orangeLight};
}

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FieldCategory = styled(Field)`
display: none;

&:checked + ${LabelCategory} {
    color: ${baseColor.colors.white};
  background: ${baseColor.colors.orangeLight};
}

  @media screen and (min-width: 768px) {
  }
`;

export const FieldItem = styled(Field)`

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
text-align: left;
color: rgba(27, 27, 27, 0.6);

padding: 10px 15px 10px 15px;
height: 40px;
width: 100%;

margin-bottom: 16px;

&:last-child {
margin-bottom: 40px;
}


background: ${baseColor.colors.mainBg};
border: 1px solid ${baseColor.colors.orangeLight};
border-radius: 40px;
outline: none;


&:hover {
border: 2px solid ${baseColor.colors.orangeLight};
};

&:focus {
border: 3px solid ${baseColor.colors.orangeLight};
};


  @media screen and (min-width: 768px) {
  }
`;

export const LabelList = styled.label`
display: block;
width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.375;
  letter-spacing: 0.04em;
text-align: left;

  color: ${baseColor.colors.inpText};



&:first-child {
margin-top: 20px;
}

& span {
display: block;
margin-bottom: 8px;
}

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FieldList = styled.div`
width: 100%;

  @media screen and (min-width: 768px) {
  }
`;
