import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 34px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
`;

export const Label = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 14px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  text-align: center;
`;
