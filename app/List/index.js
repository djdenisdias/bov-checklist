
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
	const [newItems, setNewItems] = useState([]);
	const [editedItems, setEditedItems] = useState([]);
	const [status, setStatus] = useState(false);

	const router = useRouter();

	NetInfo.fetch().then(state => {
		setStatus(state.isConnected);
	});

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

	async function getDatafromAPI() {
		try {
			const response = await api.get('/v1/checklist');
			transformDataFromAPI(response.data);
		} catch (error) {
			Alert.alert("ERROR API", error);
		}
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

	// realm.close();
}

	async function getDataFromRepo() {
		const realm = await getRealm();
		
		try {
			const _list = realm.objects('Checklist').sorted('updated_at', true);
			const _newItems = realm.objects('NewItems');
			const _editedItems = realm.objects('EditedItems');

			setList(_list.toJSON());
			setNewItems(_newItems.toJSON());
			setEditedItems(_editedItems.toJSON());

		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao carregar os dados locais. ERROR:", error);
		}

		// realm.close();
	}

	function transformDataFromRepo(_list) {
		const _newList = [];

		_list.map((item) => {
			const _newItem = {
				_id: item._id,
				type: item.type,
				amount_of_milk_produced: item.amount_of_milk_produced,
				number_of_cows_head: item.number_of_cows_head,
				had_supervision: item.had_supervision,
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
				location: {
					latitude: item.latitude,
					longitude: item.longitude
				},
				created_at: item.created_at,
				updated_at: item.updated_at,
			}
			_newList.push(_newItem);
		});

		return _newList;

	}

	async function clearNewItems() {
		const realm = await getRealm();
		
		try {
			realm.write(()=>{
				realm.delete(realm.objects("NewItems"));
			})
		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao limpar a base local de novos itens. ERROR:", error);
		}

		// realm.close();
	}

	async function clearEditedItems() {
		const realm = await getRealm();
		
		try {
			realm.write(()=>{
				realm.delete(realm.objects("EditedItems"));
			})
		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao limpar a base local de itens editados. ERROR:", error);
		}

		// realm.close();
	}

	useEffect(()=>{
		if(newItems.length > 0) {
			if (status) {
				const checklists = transformDataFromRepo(newItems);
				const obj = {
					checklists: checklists
				}
				api.post('/v1/checklist', obj).then((response)=>{
					console.log(response.data)
					clearEditedItems();
					setEditedItems([]);
				}).catch((error)=>{
					if( error.response ){
						Alert.alert("Ops!", "Algo deu errado ao sincronizar os novos dados com a base remota. ERROR:", error.response);
					}
				})
			}
		}
	}, [newItems])

	useEffect(()=>{
		if(editedItems.length > 0) {
			if (status) {
				const obj = transformDataFromRepo(editedItems);

				obj.forEach(item => {
					const id = item._id;
					delete item._id;
					api.put(`/v1/checklist/${id.toString()}`, item).then((response)=>{
						clearEditedItems();
						setEditedItems([]);
					}).catch((error)=>{
						if( error.response ){
							Alert.alert("Ops!", "Algo deu errado ao sincronizar os novos dados com a base remota. ERROR:", error.response);
						}
					})
				});
			}
		}
	}, [editedItems])

	useEffect(() => {
		if(status) {
			getDatafromAPI();
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
