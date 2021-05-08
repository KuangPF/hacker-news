import Firebase from 'firebase/app'
import 'firebase/database'

export function createAPI({ config, version }) {
  // https://stackoverflow.com/questions/37652328/how-to-check-if-a-firebase-app-is-already-initialized-on-android
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
  } else {
    Firebase.app()
  }
  return Firebase.database().ref(version)
}
