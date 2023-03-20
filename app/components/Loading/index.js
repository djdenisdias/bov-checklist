
import { View, Image, Text } from './styles';
import LOADING from '../../../assets/icons/loading.gif';

export default function Loading(){

	return(
		<View>
      <Image source={LOADING} />
      <Text>loading...</Text>
		</View>
	)
}
