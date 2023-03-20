
import { Card, TextWrapper, Text, Image, Verified } from './styles';
import FARM from '../../../assets/icons/farm.png';
import LOCATION from '../../../assets/icons/location.png';
import FARMER from '../../../assets/icons/farmer.png';
import CREATED from '../../../assets/icons/created.png';
import OK from '../../../assets/icons/ok.png';
import ATT from '../../../assets/icons/att.gif';
import dayjs from "dayjs";
import { useRouter } from "expo-router";
import 'dayjs/locale/pt-br';

export default function SimpleItem({item}){

	const router = useRouter();

	return(
		<Card
			onPress={() => router.push(`Item/${item._id}`)}
		>
			<TextWrapper>
				<Image source={FARM}/>
				<Text>{item.farm_name}</Text>
			</TextWrapper>
			<TextWrapper>
				<Image source={LOCATION}/>
				<Text>{item.farm_city}</Text>
			</TextWrapper>
			<TextWrapper>
				<Image source={FARMER}/>
				<Text>{item.farmer}</Text>
			</TextWrapper>
			<TextWrapper>
				<Image source={CREATED}/>
				<Text>{dayjs(item.created_at).locale("pt-br").format("DD/MMM/YYYY")}</Text>
			</TextWrapper>
			<Verified source={item.had_supervision ? OK : ATT} />
		</Card>
	)
}
