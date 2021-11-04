import { initializeApp } from 'firebase/app'
import settings from './settings'

const firebaseApp = initializeApp(settings)

export const db = firebaseApp.database()
export default firebaseApp