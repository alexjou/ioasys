import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { API } from '../services/axios'
import { UserResponse } from '../types/user'
import { BookResponse } from '../types/book'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface IAuthData {
  user: UserResponse
  authenticated: boolean
  error: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
  signIn: (email: string, password: string) => Promise<void>
  logout: () => void
  books: BookResponse[]
  bookSelected: BookResponse
  totalPages: number
  loadBooksByPage: (page: number) => void
  handleBookDetailsSelected: (bookId: string) => void
};

export const AuthContext = createContext({} as IAuthData)

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState({} as UserResponse)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [books, setBooks] = useState<BookResponse[]>([])
  const [bookSelected, setBookSelected] = useState({} as BookResponse)
  const [totalPages, setTotalPages] = useState<number>(1)

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getLocalStorage();  
  }, [])
  
    async function loadBooks() {
      await loadBooksByPage(1)
    }
  async function getLocalStorage() {
    const user = await AsyncStorage.getItem('@User');
    const token = await AsyncStorage.getItem('@Token');
    const refreshToken = await AsyncStorage.getItem('@RefreshToken');
    if (user && token && refreshToken) {
      setAuthenticated(true)
      setUser(JSON.parse(user))
    loadBooks()
    };

    setLoading(false);
  }

  async function signIn(email: string, password: string) {
    return await API
      .post('/auth/sign-in', { email, password })
      .then(async (response) => {
        const userData = await response.data
        const token = response.headers.authorization
        const refreshToken = response.headers['refresh-token']

        AsyncStorage.setItem('@User', JSON.stringify(userData))
        AsyncStorage.setItem('@Token', token)
        AsyncStorage.setItem('@RefreshToken', refreshToken)

        API.defaults.headers.common.Authorization = `Bearer ${token}`

        setError(false)
        setUser(userData)
        setAuthenticated(true)
        return true;
      })
      .catch(() => {
        setError(true);
        return false
      })
  };

  async function logout() {
    AsyncStorage.removeItem('@User')
    AsyncStorage.removeItem('@Token')
    AsyncStorage.removeItem('@RefreshToken')

    setUser({} as UserResponse)
    setAuthenticated(false)
  };

  async function loadBooksByPage(page: number) {
    console.log(page)
    await API.get(`/books?page=${page}&amount=25`).then((response) => {
      setBooks(response.data.data)
      setTotalPages(response.data.totalPages.toFixed())
    });
  }

  async function handleBookDetailsSelected(bookId: string) {
    await API.get(`/books/${bookId}`).then((response) => {
      setBookSelected(response.data)
    })
  }

  // if (loading) {
  //   return <h1>Carregando...</h1>
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        error,
        setAuthenticated,
        setError,
        signIn,
        logout,
        books,
        bookSelected,
        totalPages,
        loadBooksByPage,
        handleBookDetailsSelected,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext;