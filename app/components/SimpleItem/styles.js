import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 30px;
  max-width: 370px;
  position: relative;
`
export const TextWrapper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`
export const Text = styled.Text`
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  line-height: 42px;
  color: #808080;
  margin-left: 5px;
`
export const Image = styled.Image`
  width: 30px;
  height: 30px;
`
export const Verified = styled(Image)`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 40%;
  right: 20px;
`