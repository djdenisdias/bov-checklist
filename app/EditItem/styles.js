import styled from "styled-components/native";

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
export const SafeAreaView = styled.SafeAreaView`
	background-color: #78c4eb;
  align-items: center;
  width:100%;
  height: 100%;
  padding-top: 30px;
`
export const EditItemWrapper = styled.View`
	width: 100%;
  height: 100%;
`
export const EditItemHeader = styled.View`
  color: #ffffff;
  width: 100%;
  text-align: center;
  background-color: #78c4eb;
`
export const Title = styled.Text `
  font-family: 'Tailwind-Regular';
  font-size: 40px;
  color: #ffffff;
  width: 100%;
  text-align: center;
  line-height: 65px;
`
export const EditItemBody = styled.KeyboardAvoidingView`
  flex: 1;
`
export const EditItemScrollBody = styled.ScrollView`
	background-color: #ffffff;
  height: 100%;
  padding: 10px 20px;
  position: relative;
`
export const Image = styled.Image`
  width: 20px;
  height: 20px;
`
export const TextInput = styled.TextInput`
  border: 1px #46a0cd solid;
  border-radius: 5px;
  font-family: 'Tailwind-Regular';
  line-height: 38px;
  height: 50px;
  font-size: 22px;
  padding: 0 5px 5px 5px;
  width: 100%;
  margin-bottom: 5px;
`
export const Label = styled.View`
	flex-direction: row;
  align-items: center;
`
export const LabelText = styled.Text `
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  color: #808080;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`
export const Block = styled.View`
  align-items: flex-start;
  border: 1px #c8d8e0 solid;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
`
export const HalfBlock = styled.View`
  width: 45%;
`
export const BlockWrapper = styled.View`
	flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const RadioWrapper = styled.TouchableOpacity`
	flex-direction: row;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${props => `${props.checked ? '#78c4eb' : '#ffffff' }`};
  gap: 10px;
  border: 1px solid #78c4eb;
`
export const RadioText = styled.Text `
  font-family: 'Tailwind-Regular';
  font-size: 25px;
  color: ${props => `${props.checked ? '#ffffff' : '#78c4eb' }`};
`
export const RadioImage = styled.Image`
  width: 30px;
  height: 30px;
`

export const Months = styled(Block)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
export const Info = styled.Text`
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  line-height: 40px;
  color: #808080;
  margin-left:3px;
`

export const Date = styled.Text`
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  line-height: 40px;
  color: #808080;
  margin-left:3px;
`
export const Data = styled.View`
	flex-direction: row;
  align-items: center;
`

export const DropdownBlock = styled.ScrollView`
`