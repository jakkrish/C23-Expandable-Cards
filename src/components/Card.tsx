const Card = (props) => {
  const { title, content, expandable, image } = props.data

  return (
    <div>
      <h3>{title}</h3>

      <div className="text-3xl font-bold">{content}</div>
    </div>
  )
}

export default Card
