import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Inventário</Text>
        <View style={styles.button}>
          <Button
              title="➕ Gerar Códigos QR"
              onPress={() => navigation.navigate('GenerateCodes')}
          />
        </View>
        <View style={styles.button}>
          <Button
              title="🔍 Escanear Códigos QR"
              onPress={() => navigation.navigate('ScanCodes')}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 40, fontWeight: 'bold' },
  button: { marginVertical: 10, width: '80%' },
});
