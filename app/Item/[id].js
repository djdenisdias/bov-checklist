import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRouter, useSearchParams } from "expo-router";
import { getRealm } from '../database/realm';
import { ButtonOutlineIcon } from '../components/Button';
import { 
	SafeAreaView,
	ItemWrapper,
	ItemHeader,
	Title,
	ButtonsWrapper,
	Data,
	ItemBody,
	Info,
	Span,
	Block,
	Products,
	Months,
	Image,
	Date,
	BackButton } from './styles';
import FARM from '../../assets/icons/farm.png';
import LOCATION from '../../assets/icons/location.png';
import FARMER from '../../assets/icons/farmer.png';
import SUPERVISOR from '../../assets/icons/supervisor.png';
import MILK from '../../assets/icons/milk.png';
import COW from '../../assets/icons/cow.png';
import CREATED from '../../assets/icons/created.png';
import UPDATED from '../../assets/icons/updated.png';
import TYPE from '../../assets/icons/type.png';
import OK from '../../assets/icons/ok.png';
import ATT from '../../assets/icons/att.gif';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Item(){

	const router = useRouter();
	const searchParams = useSearchParams();
	const [item, setItem] = useState({});

	async function getItemDetais() {
		const realm = await getRealm();

		try {
			const data = realm.objects('Checklist').filtered(`_id = '${searchParams.id}'`);
			setItem(data[0].toJSON());
		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao carregar os detalhes do item. ERROR:", error);
		}
	}

	useEffect(()=>{
		getItemDetais();
	}, []);

	return(
		<SafeAreaView>
			<ItemWrapper>
				<ItemHeader>
					<BackButton onPress={() => router.back()}>
						<Icon name={"keyboard-backspace"} size={40} color={"#ffffff"}/>
					</BackButton>
					<Title>item</Title>
					<ButtonsWrapper>
						<ButtonOutlineIcon
							title="editar"
							color="#ffffff"
							icon="playlist-edit"
							onPress={() => router.push(`EditItem/${item._id}`)}
						/>
					</ButtonsWrapper>
				</ItemHeader>
				
				<ItemBody>
					<Block>
						<Data>
							<Image source={FARM} />
							<Info>{item.farm_name}</Info>
						</Data>
						<Data>
							<Image source={LOCATION} />
							<Info>{item.farm_city}</Info>
						</Data>
					</Block>

					<Block>
						<Data>
							<Image source={FARMER} />
							<Info>{item.farmer}</Info>
						</Data>
						<Data>
							<Image source={SUPERVISOR} />
							<Info>{item.supervisor}</Info>
						</Data>
					</Block>

					<Block>
						<Data>
							<Image source={TYPE} />
							<Info>{item.type}</Info>
						</Data>
					</Block>

					<Products>
						<Data>
							<Image source={MILK} />
							<Info>{item.amount_of_milk_produced} <Span>l/m</Span></Info>
						</Data>
						<Data>
							<Image source={COW} />
							<Info>{item.number_of_cows_head} <Span>(units)</Span></Info>
						</Data>
					</Products>

					<Months>
						<Data>
							<Image source={CREATED} />
							<Date>{dayjs(item.created_at).locale("pt-br").format("DD/MMM/YYYY")}</Date>
						</Data>
						<Data>
							<Image source={UPDATED} />
							<Date>{dayjs(item.updated_at).locale("pt-br").format("DD/MMM/YYYY")}</Date>
						</Data>
					</Months>
					<Block>
						<Data>
							{
								item.had_supervision ?
								<>
									<Image source={OK} />
									<Info>Houve supervisão</Info>
								</>
								: 
								<>
									<Image source={ATT} />
									<Info>Não houve supervisão</Info>
								</>
							}
						</Data>
					</Block>
				</ItemBody>
			</ItemWrapper>
	 </SafeAreaView>
	)
}