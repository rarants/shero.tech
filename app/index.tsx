import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
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
import { useNavigation } from '@react-navigation/native';

library.add(fab, far, fas)

export default function IndexScreen({ }) {
  const navigation = useNavigation();
  // const { control, handleSubmit, formState: { errors } } = useForm();
  // const [submittedData, setSubmittedData] = useState(null);
  const onSubmit = (data: any) => {
    // Simulate form submission
    console.log('Submitted Data:', data);
    navigation.navigate('(tabs)')
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/icon/(shero.).png')} />
      <View>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          placeholder="Usuáro (Email)"
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          value="teste@teste.com"
        />
      </View>
      <View>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Senha"
          returnKeyType="done"
          secureTextEntry
          value="123456"
        />
      </View>
      <View>
        <TouchableOpacity style={{ ...styles.links, alignSelf: 'flex-end' }}>
          <Text>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 }}>
          <View style={{ width: '80%', minHeight: 100, paddingEnd: 7 }}>
            <BaseButton onPress={onSubmit}>
              Entrar
            </BaseButton>
          </View>
          <View style={{ width: '20%', minHeight: 100 }}>
            <IconButton>
              <FontAwesomeIcon icon="flag" color="#FFFFFF" style={{ padding: 0, margin: 0, maxWidth: 10 }} />
            </IconButton>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{ ...styles.links, alignSelf: 'center', marginTop: 40 }}>
          <Text>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 170,
    left: 38,
    maxWidth: '80%',
    gap: 40
  },
  image: {
    maxWidth: 190,
    height: 52,
    marginBottom: 8,
    alignSelf: 'center'
  },
  label: {
    color: '#777777',
    fontSize: 16,
    lineHeight: 21.82,
    marginBottom: 0
  },
  links: {
    color: '#777777',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 19.1,
    marginBottom: 0
  },
  buttonsContainer: {
    flex: 1
  }
});

