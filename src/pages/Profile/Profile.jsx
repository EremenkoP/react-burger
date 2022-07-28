import ProfileForm from "../../components/profileForm/ProfileForm"
import ProfileNav from "../../components/provileNav/ProvileNav"

import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.content}>
      <ProfileNav />
      <ProfileForm />
    </div>
  )
}

export default Profile
