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
export const ItemWrapper = styled.View`
	width: 100%;
  height: 100%;
`
export const ItemHeader = styled.View`
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
export const ButtonsWrapper = styled.View`
	flex-direction: row;
  justify-content: center;
  /* gap: 15%; */
`
export const ItemBody = styled.View`
	background-color: #ffffff;
  height: 100%;
  padding: 10px 20px;
`
export const Block = styled.View`
  align-items: flex-start;
  border: 1px #46a0cd solid;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
`
export const Products = styled(Block)`
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`
export const Months = styled(Block)`
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`
export const Data = styled.View`
	flex-direction: row;
  align-items: center;
`
export const Info = styled.Text`
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  line-height: 40px;
  color: #808080;
  margin-left:3px;
`
export const Span = styled.Text`
  font-size: 18px;
  color: #808080;
`
export const Image = styled.Image`
  width: 40px;
  height: 40px;
`
export const Date = styled.Text`
  font-family: 'Tailwind-Regular';
  font-size: 20px;
  line-height: 40px;
  color: #808080;
  margin-left:3px;
`