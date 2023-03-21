import { useEffect } from 'react'
import Single from './Single'

const AvatarComponents = ({ all, setValue }) => {
  useEffect(() => {}, [all])
  return (
    <div className="p-10 overflow-scroll grid grid-cols-4">
      {all &&
        all.map((item, index) => {
          return (
            <div key={index}>
              <Single item={item} setValue={setValue} />
            </div>
          )
        })}
    </div>
  )
}
export default AvatarComponents
