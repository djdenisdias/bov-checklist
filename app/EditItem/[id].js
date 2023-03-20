
import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import {
  EditItemWrapper,
  EditItemHeader,
  Title,
  EditItemBody,
  EditItemScrollBody,
  Image,
  TextInput,
  Label,
  LabelText,
  Block,
  HalfBlock,
  RadioWrapper,
  RadioText,
  RadioImage,
  BlockWrapper, 
  SafeAreaView,
  BackButton,
  DropdownBlock } from './styles';
import { ButtonFilled } from '../components/Button';
import { useRouter, useSearchParams } from "expo-router";
import { getRealm } from '../database/realm';
import FARM from '../../assets/icons/farm.png';
import LOCATION from '../../assets/icons/location.png';
import FARMER from '../../assets/icons/farmer.png';
import SUPERVISOR from '../../assets/icons/supervisor.png';
import TYPE from '../../assets/icons/type.png';
import MILK from '../../assets/icons/milk.png';
import COW from '../../assets/icons/cow.png';
import YES from '../../assets/icons/yes.png';
import NO from '../../assets/icons/no.png';
import CREATED from '../../assets/icons/created.png';
import UPDATED from '../../assets/icons/updated.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function EditItem(){

  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'BPA', value: 'BPA'},
    {label: 'Antibiótico', value: 'Antibiótico'},
    {label: 'BPF', value: 'BPF'}
  ]);
  const [item, setItem] = useState('');

  const [farm_name, setFarm_name] = useState('');
  const [farm_city, setFarm_city] = useState('');
  const [farmer, setFarmer] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [type, setType] = useState('');
  const [amount_of_milk_produced, setAmount_of_milk_produced] = useState('');
  const [number_of_cows_head, setNumber_of_cows_head] = useState('');
  const [had_supervision, setHad_supervision] = useState(false);
  const [disabled, setDisabled] = useState(true);

  async function getItemDetais() {
		const realm = await getRealm();

		try {
			const data = realm.objects('Checklist').filtered(`_id = '${searchParams.id}'`);
			setItem(data[0].toJSON());
		} catch (error) {
			Alert.alert("Ops!", "Algo deu errado ao carregar os dados do item. ERROR:", error);
		}
	}

  async function updateItem() {
    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create("Checklist", {
          _id: item._id,
          farm_name: farm_name,
          farm_city: farm_city,
          farmer: farmer,
          supervisor: supervisor,
          type:type,
          amount_of_milk_produced: parseInt(amount_of_milk_produced),
          number_of_cows_head: parseInt(number_of_cows_head),
          latitude: -23.5505567806661,
          longitude: -46.77197013851934,
          created_at: item.created_at,
          updated_at: new Date(),
          had_supervision: had_supervision
        }, "modified");
      });

      Alert.alert("Oba!", "Item alterado com sucesso!");
      clearInputs();
      router.push("/");
    } catch (error) {
      Alert.alert("Ops!", "Algo deu errado ao atualizar os dados do item... ERROR:", error);
    };

    realm.close();
  };

  function clearInputs() {
    setFarm_name('');
    setFarm_city('');
    setFarmer('');
    setSupervisor('');
    setType('Select an type');
    setAmount_of_milk_produced('');
    setNumber_of_cows_head('');
    setDisabled(true);
  }

  useEffect(() => {
    getItemDetais();
  }, [])

  useEffect(() => {
    if ( farmer === '' || 
         farm_name === '' ||
         farm_city === '' ||
         supervisor === '' ||
         type === 'Select an type' ||
         amount_of_milk_produced === '' ||
         number_of_cows_head  === '' )  return setDisabled(true);
    return setDisabled(false);
    
  }, [farmer,
    farm_name,
    farm_city,
    supervisor,
    type,
    amount_of_milk_produced,
    number_of_cows_head]);

  useEffect(() => {
    if( item != ''){
      setFarm_name(item.farm_name);
      setFarm_city(item.farm_city);
      setFarmer(item.farmer);
      setSupervisor(item.supervisor);
      setType(item.type);
      setAmount_of_milk_produced(item.amount_of_milk_produced.toString());
      setNumber_of_cows_head(item.number_of_cows_head.toString());
      setHad_supervision(item.had_supervision);
    }
  }, [item]);

	return(
    <SafeAreaView>
      <EditItemWrapper>
        <EditItemHeader>
          <BackButton onPress={() => router.back()}>
						<Icon name={"keyboard-backspace"} size={40} color={"#ffffff"}/>
					</BackButton>
          <Title>editar item</Title>
        </EditItemHeader>
        <EditItemBody behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <EditItemScrollBody>
            <Block>
              <Label>
                <Image source={FARM} />
                <LabelText>nome da fazenda</LabelText>
              </Label>
              <TextInput
                onChangeText={(e) => setFarm_name(e)}
                value={farm_name}
              />
              <Label>
                <Image source={LOCATION} />
                <LabelText>cidade da fazenda</LabelText>
              </Label>
              <TextInput
                onChangeText={(e) => setFarm_city(e)}
                value={farm_city}
              />
            </Block>
            <Block>
              <Label>
                <Image source={FARMER} />
                <LabelText>fazendeiro</LabelText>
              </Label>
              <TextInput
                onChangeText={(e) => setFarmer(e)}
                value={farmer}
              />
              <Label>
                <Image source={SUPERVISOR} />
                <LabelText>supervisor</LabelText>
              </Label>
              <TextInput
                onChangeText={(e) => setSupervisor(e)}
                value={supervisor}
              />
            </Block>
            <Block>
              <Label>
                <Image source={TYPE} />
                <LabelText>tipo de inspeção</LabelText>
              </Label>
              <DropdownBlock horizontal={true} style={{ height: open ? 180 : 60}}>
                <DropDownPicker
                  open={open}
                  value={type}
                  items={items}
                  setOpen={setOpen}
                  setValue={setType}
                  setItems={setItems}
                  listParentLabelStyle={{ fontFamily: 'Tailwind-Regular', fontSize: 20}}
                  containerStyle={{width: 200}}
                  labelStyle={{ color: 'black', fontFamily: 'Tailwind-Regular', fontSize: 20}}
                />
              </DropdownBlock>
              <BlockWrapper>
                <HalfBlock>
                  <Label>
                    <Image source={MILK} />
                    <LabelText>leite/mês</LabelText>
                  </Label>
                  <TextInput
                    onChangeText={(e) => setAmount_of_milk_produced(e)}
                    value={amount_of_milk_produced}
                  />
                </HalfBlock>
                <HalfBlock>
                  <Label>
                    <Image source={COW} />
                    <LabelText>qtd. gado</LabelText>
                  </Label>
                  <TextInput
                    onChangeText={(e) => setNumber_of_cows_head(e)}
                    value={number_of_cows_head}
                  />
                </HalfBlock>
              </BlockWrapper>
            </Block>
            <Block>
              <Label>
                <Image source={CREATED} />
                <LabelText>data da criação</LabelText>
              </Label>
              <LabelText style={{marginTop: 5}}>{dayjs(item.created_at).locale("pt-br").format("DD/MMM/YYYY")}</LabelText>
              <Label style={{marginTop: 10}}>
                <Image source={UPDATED} />
                <LabelText>data da última atualização</LabelText>
              </Label>
              <LabelText style={{marginTop: 5}}>{dayjs(item.updated_at).locale("pt-br").format("DD/MMM/YYYY")}</LabelText>
            </Block>
            
            <Block>
              <Label>
                <LabelText>supervisionado?</LabelText>
              </Label>
              <BlockWrapper>
              <HalfBlock>
                <RadioWrapper checked={had_supervision} onPress={()=> setHad_supervision(true)}>
                  <RadioImage source={YES} />
                  <RadioText checked={had_supervision}>sim</RadioText>
                </RadioWrapper>
              </HalfBlock>
              <HalfBlock>
                <RadioWrapper RadioWrapper checked={!had_supervision} onPress={()=> setHad_supervision(false)}>
                  <RadioImage source={NO} />
                  <RadioText checked={!had_supervision}>não</RadioText>
                </RadioWrapper>
              </HalfBlock>
              </BlockWrapper>
            </Block>

            <View>
              <ButtonFilled title="atualizar" color="#78c4eb" onPress={updateItem} disabled={disabled} />
            </View>
            </EditItemScrollBody>
        </EditItemBody>
      </EditItemWrapper>
    </SafeAreaView>
	)
}