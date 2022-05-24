import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { RootStackScreenProps } from "../../../types";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  FlatList,
} from "react-native";
import AuthContext from "../../contexts/auth";
import { BookResponse } from "../../types/book";
import { Book } from "../../components/molecules/Book";
import { DataTable } from 'react-native-paper';

export default function Home({ navigation }: RootStackScreenProps<"Home">) {
  const { logout, books, handleBookDetailsSelected, loadBooksByPage } = useContext(AuthContext);
  const Logout = require("../../components/images/logout.png");
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const handleBookDetails = async (book: BookResponse) => {
    await handleBookDetailsSelected(book.id);    
    navigation.navigate("Details");
  }

  async function onRefresh() {
    setRefreshing(true);
    await loadBooksByPage(page)
    setRefreshing(false);
  }; 
  
  useEffect(() => {
    loadBooksByPage(page);
  }, [page])
  
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        <View style={styles.firstView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={styles.firstTextView}>ioasys</Text>
            <Text style={styles.seccondTextView}>Books</Text>
          </View>

          <TouchableOpacity
            onPress={() => { logout(); navigation.navigate("Login") }}
          >
            <Image source={Logout} />
          </TouchableOpacity>
        </View>   
        
        {/* <FlatList
          data={allBooks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Book key={item.id} book={item} handleBookDetails={handleBookDetails}  />
          }
          onEndReached={onLoadingAPI}
          onEndReachedThreshold={0.1}
        ListFooterComponent={<LoadingIndicator isLoading={loading} />}
        /> */}
      
        <DataTable>
          <DataTable.Pagination
            page={page}
            
            label={page}
            onPageChange={page => setPage(page)}
            numberOfPages={20} />

        {books.map((book: BookResponse) => (
           <Book key={book.id} book={book} handleBookDetails={handleBookDetails}  />
        ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}
