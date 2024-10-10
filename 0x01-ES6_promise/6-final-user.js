import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto('guillaume.jpg'), signUpUser()])
    .then((res) => (
      res.map((r) => ({
        status: r.status,
        value: r.status === 'fulfilled' ? r.value : String(r.reason),
      }))
    ));
}
