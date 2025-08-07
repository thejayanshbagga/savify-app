import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { styles } from '../styles/LanguageSelector.styles';

const LANGUAGES = [
  { label: 'English', value: 'EN' },
  { label: 'Français', value: 'FR' },
  { label: 'हिन्दी', value: 'HI' },
  { label: 'తెలుగు', value: 'TE' },
  { label: 'ગુજરાતી', value: 'GU' },
];

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);

  const currentLabel =
    LANGUAGES.find((lang) => lang.value === language)?.label || 'Select Language';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>{currentLabel}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={LANGUAGES}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    toggleLanguage(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
