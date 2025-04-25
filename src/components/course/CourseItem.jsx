function HeartIconBtn({onClick, isFavorite = false}) {
  return (
    <button className="btn" onClick={onClick}>
      <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'} alt=""/>
    </button>
  )
}

function LinkIconBtn({link}) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt=""/>
    </a>
  )
}

export default function CourseItem({title, description, thumbnail, isFavorite, link}) {
  function handleFavorite(e) {
    e.stopPropagation();
    alert(isFavorite ? '좋아요': '몰루?')
  }

  function handleItemClick() {
    open(link, '_blank')
  }

  return (<article className="course" onClick={handleItemClick}>
    <img className="course__img" src={thumbnail} alt="강의 이미지"/>
    <div className="course__body">
      <div className="course__title">{title}</div>
      <div className="course__description">{description}</div>
    </div>
    <div className="course__icons">
      <HeartIconBtn onClick={handleFavorite} isFavorite={isFavorite}/>
      {link && <LinkIconBtn link={link}/>}
    </div>
  </article>)
}
