import { Platform } from 'react-native'
import { deleteSessionData } from 'startupjs'

export default async function logout () {
  await deleteSessionData()
  if (Platform.OS === 'web') {
    // reload the page to clear the session
    window.location.reload()
    await new Promise(resolve => setTimeout(resolve, 10000))
    return
  }
  console.error('>>> logout on mobile is not fully implemented. Have to reload the app')
  // TODO: implement logout for mobile - get a new anonymous token and force a full app re-render
}
