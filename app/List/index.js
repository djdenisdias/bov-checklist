
import { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { ButtonOutlineIcon } from '../components/Button';
import { ListWrapper, Title } from './styles';
import { useRouter } from "expo-router";
import { getRealm } from '../database/realm';
import SimpleItem from '../components/SimpleItem';
import NetInfo from "@react-native-community/netinfo";
import api from '../services/api';

export default function List(){

	const [list, setList] = useState([]);
	const [newList, setNewList] = useState([]);
	const [status, setStatus] = useState(false);

	const router = useRouter();

	NetInfo.fetch().then(state => {
		setStatus(state.isConnected);
	});

	async function getDatafromAPI() {
		try {
			const response = await api.get('/v1/checklist');
			transformDataFromAPI(response.data);
		} catch (error) {
			Alert.alert("ERROR API", error);
		}
	}

	async function setDataToAPI() {
		try {
			await api.post('/v1/checklist', newList);
		} catch (error) {
			console.log("error setDataToAPI error", error);
		}

	}

	async function transformDataFromAPI(apiData) {
		const _newList = [];
		apiData.map((item) => {
			
			const newItem = {
				_id: item._id.toString(),
				type: item.type,
				farm_name: item.farmer.name,
				farm_city: item.farmer.city,
				farmer: item.to.name,
				supervisor: item.from.name,
				amount_of_milk_produced:  parseInt(item.amount_of_milk_produced),
				number_of_cows_head: parseInt(item.number_of_cows_head),
				had_supervision:item.had_supervision,
				latitude: item.location.latitude,
				longitude: item.location.longitude,
				created_at: item.created_at,
				updated_at: item.updated_at,
			}
			
			_newList.push(newItem);
		});

		setDataToRepo(_newList);
	}

async function setDataToRepo(_newList) {
	const realm = await getRealm();

	try {
		realm.write(() => {
			_newList.forEach(item => {
				realm.create("Checklist", item, true);
			});
		});

		getDataFromRepo();
	} catch (error) {
		Alert.alert("Ops!", "Algo deu errado ao atualizar os dados locais. ERROR:", error);
	};
}

	async function getDataFromRepo() {
		const realm = await getRealm();
		
		try {
			const data = realm.objects('Checklist').sorted('updated_at', true);
			setList(data.toJSON());
		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao carregar os dados locais. ERROR:", error);
		}
	}

	function transformDataFromRepo() {
		const _newList = [];
		list.map((item) => {
			
			const newItem = {
				_id: item._id,
				type: item.type,
				amount_of_milk_produced: item.amount_of_milk_produced,
				farmer: {
					name: item.farm_name,
					city: item.farm_city
				},
				from: {
					name: item.supervisor
				},
				to: {
					name: item.farmer
				},
				number_of_cows_head: item.number_of_cows_head,
				had_supervision: item.had_supervision,
				location: {
					latitude: item.latitude,
					longitude: item.longitude
				},
				created_at: item.created_at,
				updated_at: item.updated_at,
			}
			
			_newList.push(newItem);
		});

		setNewList(_newList);
	}

	useEffect(() => {
		if(status) {
			getDatafromAPI();
			// setDataToAPI();
		} else {
			getDataFromRepo();
		}
	}, [status]);

	return(
		<ListWrapper>
			<Title>checklists</Title>
				<ButtonOutlineIcon
					title="adicionar"
					color="#ffffff"
					icon="plus-circle-outline"
					onPress={()=> router.push("/NewItem")}
				/>
				<FlatList
					data={list}
					renderItem={({item}) => <SimpleItem item={item} />}
				/>
		</ListWrapper>
	)
}
