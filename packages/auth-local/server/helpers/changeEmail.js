import { EMAIL_REGEXP } from '../../isomorphic/constants'

export default async function changeEmail ({ email, userId, model }) {
  if (!userId) {
    throw new Error('Provide user id')
  }

  if (!email || !EMAIL_REGEXP.test(email)) {
    throw new Error('Provide correct user email')
  }

  const $existingUser = model.query('auths', { 'providers.local.email': email })
  const $auth = model.scope('auths.' + userId)

  await model.fetch($existingUser, $auth)

  const existingUser = $existingUser.get()[0]
  const auth = $auth.get()

  if (existingUser) {
    throw new Error('User with same email is already registered')
  }

  if (!auth) {
    throw new Error('User not found')
  }

  if (!auth?.providers?.local) {
    throw new Error('User has no local auth provider')
  }

  const $user = model.scope('users.' + userId)
  await $user.fetch()

  await $user.set('email', email)
  await $auth.set('email', email)
  await $auth.set('providers.local.email', email)

  model.unfetch($user, $auth, $existingUser)
}
