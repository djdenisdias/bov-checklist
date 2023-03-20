import { useState, useEffect, useLayoutEffect } from 'react';
import { View, Alert } from 'react-native';
import { ButtonFilled } from '../components/Button';
import { useRouter } from "expo-router";
import { getRealm } from '../database/realm';
import {
  NewItemWrapper,
  NewItemHeader,
  Title,
  NewItemBody,
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
  NewItemScrollBody,
  DropdownBlock } from './styles';
import FARM from '../../assets/icons/farm.png';
import LOCATION from '../../assets/icons/location.png';
import FARMER from '../../assets/icons/farmer.png';
import SUPERVISOR from '../../assets/icons/supervisor.png';
import TYPE from '../../assets/icons/type.png';
import MILK from '../../assets/icons/milk.png';
import COW from '../../assets/icons/cow.png';
import YES from '../../assets/icons/yes.png';
import NO from '../../assets/icons/no.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function NewItem(){

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'BPA', value: 'BPA'},
    {label: 'Antibiótico', value: 'Antibiótico'},
    {label: 'BPF', value: 'BPF'}
  ]);

  const [farm_name, setFarm_name] = useState('');
  const [farm_city, setFarm_city] = useState('');
  const [farmer, setFarmer] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [type, setType] = useState('');
  const [amount_of_milk_produced, setAmount_of_milk_produced] = useState('');
  const [number_of_cows_head, setNumber_of_cows_head] = useState('');
  const [had_supervision, setHad_supervision] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function addNewItem() {
    const data = {
      _id: Math.floor(1000000000 + Math.random() * 900000).toString(),
      farm_name: farm_name,
      farm_city: farm_city,
      farmer: farmer,
      supervisor: supervisor,
      type:type,
      amount_of_milk_produced: parseInt(amount_of_milk_produced),
      number_of_cows_head: parseInt(number_of_cows_head),
      latitude: -23.5505567806661,
      longitude: -46.77197013851934,
      created_at: new Date(),
      updated_at: new Date(),
      had_supervision: had_supervision
    }

    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create("Checklist", data);
        realm.create("NewItems", data);
      });

      Alert.alert("Oba!", "Novo item criado com sucesso!");
      clearInputs();
      router.push("/");
    } catch (error) {
      Alert.alert("Ops!", "Algo deu errado... ERROR:", error);
    };

    realm.close();
  };

  function clearInputs() {
    setFarm_name('');
    setFarm_city('');
    setFarmer('');
    setSupervisor('');
    setType('');
    setAmount_of_milk_produced('');
    setNumber_of_cows_head('');
    setDisabled(true);
  }

  useEffect(() => {
    if ( farmer === '' || 
         farm_name === '' ||
         farm_city === '' ||
         supervisor === '' ||
         type === '' ||
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

  useLayoutEffect(()=>{
    setDisabled(true)
  }, []);
    
	return(
    <SafeAreaView>
      <NewItemWrapper>
        <NewItemHeader>
          <BackButton onPress={() => router.back()}>
						<Icon name={"keyboard-backspace"} size={40} color={"#ffffff"}/>
					</BackButton>
          <Title>novo item</Title>
        </NewItemHeader>
        <NewItemBody behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <NewItemScrollBody>
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
                    keyboardType="numeric"
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
                    keyboardType="numeric"
                  />
                </HalfBlock>
              </BlockWrapper>
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
              <ButtonFilled title="add" color="#78c4eb" onPress={addNewItem} disabled={disabled} />
            </View>
          </NewItemScrollBody>
        </NewItemBody>
      </NewItemWrapper>
    </SafeAreaView>
	)
}