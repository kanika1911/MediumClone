import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'
const Post = (props) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(`/blogs/${props.path}`)
  }
  const newDate = new Date(props.date)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className="post" onClick={clickHandler}>
      <div className="left">
        <span>0{props.id}</span>
      </div>
      <div className="right">
        <div className="userInfo">
          <img
            src="https://media3.giphy.com/avatars/chocotoycute/nqxNqnjcaTeX.gif"
            alt=""
          />
          <span>{props.name}</span>
        </div>
        <div className="title">{props.title}</div>
        <div className="date">
          <span>{newDate.toLocaleDateString(undefined, options)}</span>
        </div>
      </div>
    </div>
  )
}

export default Post
