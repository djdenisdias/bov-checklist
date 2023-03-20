import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 45%;
  height: 50px;
  align-self: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`

export const Title = styled.Text`
  font-family: "Tailwind-Regular";
  font-size: 25px;
  color: ${props => `${props.color ? props.color : '#ffffff' }`};
  text-align: center;
`

export const Outline = styled(Button)`
  border-color: ${props => `${props.color ? props.color : '#ffffff' }`};
	border-style: solid;
  border-width: 1px;
`

export const Filled = styled(Button)`
  background-color: ${props => `${props.color}`};
  justify-content: center;
  align-items: center;
`

export const OutlineIcon = styled(Button)`
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-color: ${props => `${props.color ? props.color : '#ffffff' }`};
  border-style: solid;
  border-width: 1px;
	
`

export const FilledIcon = styled(Button)`
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${props => `${props.color}`};
`