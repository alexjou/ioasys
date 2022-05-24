import React, { useContext, useMemo } from 'react'

import AuthContext from '../../contexts/auth';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

interface IBookDetailsModal {
  isOpen: boolean
  setIsOpen: () => void
}

export default function Details({ isOpen, setIsOpen, navigation }: IBookDetailsModal) {
  const { bookSelected } = useContext(AuthContext);
  const {
    imageUrl,
    title,
    authors,
    pageCount,
    publisher,
    published,
    language,
    description,
    category,
    isbn10,
    isbn13,
  } = bookSelected
  const Aspas = require("../../components/images/aspas.png");
  
  const authorsFormatted = useMemo(() => {
    if (authors.length === 1) return authors[0]
    return authors.join(', ')
  }, [authors]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', borderWidth: 1, borderRadius: 30, padding: 5 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={25} color={"black"} />
        </TouchableOpacity>
        <View style={{ flex: 1, paddingBottom: 20, alignItems: 'center' }}>
          <Image style={styles.image} source={{ uri: imageUrl }} alt="img" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{authorsFormatted}</Text>
        </View>
        <View style={styles.content}>

          <Text style={styles.firstText}>INFORMAÇÕES</Text>
          <View style={{ marginBottom: 10, marginTop: 30, flex: 1 }}>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Páginas</Text>
              <Text style={styles.seccondText}>{pageCount || '-'} páginas</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Editora</Text>
              <Text style={styles.seccondText}>{publisher || '-'}</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Publicação</Text>
              <Text style={styles.seccondText}>{published || '-'}</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Idioma</Text>
              <Text style={styles.seccondText}>{language || '-'}</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Título Original</Text>
              <Text style={styles.seccondText}>{title || '-'}</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>ISBN-10</Text>
              <Text style={styles.seccondText}>{isbn10 || '-'}</Text>
            </View>

            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>ISBN-13</Text>
              <Text style={styles.seccondText}>{isbn13 || '-'}</Text>
            </View>
            <View style={styles.containerDetail}>
              <Text style={styles.seccondTitle}>Categoria</Text>
              <Text style={styles.seccondText}>{category || '-'}</Text>
            </View>
          </View>

          <View>
            <Text style={[styles.seccondTitle, { marginVertical: 20,}]}>
              RESENHA DA EDITORA
            </Text>
            <Text style={styles.descriptionText}>
              <View>
                <Image source={Aspas}/>
              </View>
              {description || '-'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
