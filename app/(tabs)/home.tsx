import {
  Image,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import TextInput from '@/components/TextInput';
import BaseButton from '@/components/BaseButton';
import IconButton from '@/components/IconButton';
import { Avatar, Card, Text } from 'react-native-paper';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

library.add(fab, far, fas)
export default function HomeScreen() {
  const [cards, setCards] = useState([
    {
      title: 'Inteligência Artificial',
      duration: 35,
      primaryColor: '#1CB0F6',
      imageUrl: require('@/assets/images/1-Photoroom.png')
    },
    {
      title: 'Ciência de Dados',
      duration: 45,
      primaryColor: '#E06FA9',
      imageUrl: require('@/assets/images/2-Photoroom.png')
    },
    {
      title: 'Empreendedorismo Feminino',
      duration: 30,
      primaryColor: '#FDD32C',
      imageUrl: require('@/assets/images/3-Photoroom.png')
    },
    {
      title: 'Desenvolvimento',
      duration: 47,
      primaryColor: '#77A14B',
      imageUrl: require('@/assets/images/4-Photoroom.png')
    },
    {
      title: 'Marketing Digital',
      duration: 39,
      primaryColor: '#F39200',
      imageUrl: require('@/assets/images/5-Photoroom.png')
    }
  ])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Meus Cursos</Text>
          {cards.map((el, index) =>
            <Card style={{ ...styles.card, backgroundColor: el.primaryColor }} key={'card-' + index}>
              <View style={{ minWidth: '100%', position: 'relative' }}>
                <ImageBackground
                  source={el.imageUrl}
                  style= {{ padding: 20 }}
                  imageStyle={{
                    resizeMode: "contain",
                    alignSelf: "flex-end",
                    left: 150,
                    position: 'absolute'
                  }}
                >
                  <View style={{ width: '100%', minHeight: 100, paddingEnd: 7 }}>
                    <Text style={styles.title}>{el.title}</Text>
                    <Text style={styles.subtitle}>{el.duration > 1 ? 'horas' : 'hora'}</Text>
                    <BaseButton style={styles.baseButton} labelStyle={{ ...styles.labelStyle, color: el.primaryColor }}>Acessar</BaseButton>
                  </View>
                </ImageBackground>
              </View>
            </Card>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 80,
    left: 20,
    maxWidth: '90%'
  },
  label: {
    fontSize: 16,
    lineHeight: 21.82,
    marginBottom: 20
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 21.82,
    marginVertical: 15
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16.37,
    marginBottom: 40
  },
  baseButton: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    borderRadius: 50,
    padding: 0,
  },
  labelStyle: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 16.37,
    color: '#1CB0F6'
  }
});

