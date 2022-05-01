import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5%;
  background-color: ${props => props.theme.background};
`;

export const ProfileImage = styled.Image`
  border-radius: 100px;
  width: 150px;
  height: 150px;
  align-self: center;
  margin: 5% 0 2% 0;
`;

export const Name = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.color};
  font-family: 'Poppins-Bold';
  align-self: center;
`;

export const Location = styled.Text`
  font-family: 'Poppins-Italic';
  align-self: center;
  color: ${props => props.theme.color};
`;

export const Topic = styled.Text`
  margin-top: 12px;
  font-size: 17px;
  font-family: 'Poppins-Bold';
  color: ${props => props.theme.color};
  padding: 1% 0;
`;

export const DescriptionText = styled.Text`
  margin-top: 12px;
  font-family: 'Poppins-Regular';
  color: ${props => props.theme.color};
`;
export const IconImage = styled.Image`
  border-radius: 100px;
  width: 25px;
  height: 25px;
  margin: 2% 2% 0 0;
`;
