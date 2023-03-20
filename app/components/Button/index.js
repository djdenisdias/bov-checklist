
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Outline, Filled, OutlineIcon, FilledIcon, Title } from './styles';

export function ButtonOutline({title, color, onPress, disabled}){
	return (
		<Outline color={color} onPress={onPress} disabled={disabled}>
			<Title color={color}>{title}</Title>
		</Outline>
    )
}

export function ButtonFilled({title, color, onPress, disabled}){
	return (
		<Filled color={disabled ? `${color}77` : color} onPress={onPress} disabled={disabled}>
			<Title color={"#ffffff"}>{title}</Title>
		</Filled>
    )
}

export function ButtonOutlineIcon({title, color, icon, onPress, disabled}){
	return (
		<OutlineIcon onPress={onPress} disabled={disabled}>
			<Icon name={icon} size={30} color={color} />
			<Title color={color}>{title}</Title>
		</OutlineIcon>
    )
}

export function ButtonFilledIcon({title, color, icon, onPress, disabled}){
	return (
		<FilledIcon color={disabled ? `${color}77` : color} onPress={onPress} disabled={disabled}>
			<Icon name={icon} size={30} color={"#ffffff"} />
			<Title color={"#ffffff"}>{title}</Title>
		</FilledIcon>
    )
}