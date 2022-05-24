import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { BookResponse } from '../../../types/book'
import styles from './styles'


interface IBook {
  book: BookResponse
  handleBookDetails: (book: BookResponse) => void
}

export function Book({ book, handleBookDetails }: IBook) {
  const { imageUrl, title, authors, pageCount, publisher, published } = book

  const authorsFormatted = useMemo(() => {
    if (authors.length === 1) {
      return authors[0]
    } else {
      return `${authors[0]} e outros`
    }
  }, [authors])

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleBookDetails(book)}>
      <Image style={styles.image} source={{ uri: imageUrl }} alt="img" />

      <View style={styles.content}>
        <View>
          <Text style={styles.firstText}>{title}</Text>

          <Text style={styles.seccondText}>{authorsFormatted}</Text>
        </View>

        <View>
          <Text style={styles.description}>{pageCount} páginas</Text>
          <Text style={styles.description}>Editora {publisher}</Text>
          <Text style={styles.description}>Publicado em {published}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
