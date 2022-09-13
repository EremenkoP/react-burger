import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.loadingBox}>
      <div className={style.loading}></div>
    </div>
  )
}

export {Loading}
