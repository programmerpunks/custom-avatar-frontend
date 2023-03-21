const Single = ({ item, setValue }) => {
  const handleValue = () => {
    setValue(item.url)
  }

  return (
    <div className="w-36 h-36 p-2" onClick={() => handleValue()}>
      <img src={item.url} alt="" className="bg-white/20" />
    </div>
  )
}
export default Single
