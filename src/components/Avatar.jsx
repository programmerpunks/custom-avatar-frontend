import axios from 'axios'
import html2canvas from 'html2canvas'

import AvatarComponents from './AvatarComponents'
import { useEffect, useState } from 'react'

const Avatar = () => {
  const [allBackground, setAllBackground] = useState('')
  const [allHead, setAllHead] = useState('')
  const [allBody, setAllBody] = useState('')
  const [allEars, setAllEars] = useState('')
  const [allEyes, setAllEyes] = useState('')
  const [allMouth, setAllMouth] = useState('')
  const [allNose, setAllNose] = useState('')
  const [allHand, setAllHand] = useState('')
  const [allArm, setAllArm] = useState('')
  const [allExtras, setAllExtras] = useState('')

  const [background, setBackground] = useState('')
  const [head, setHead] = useState('')
  const [body, setBody] = useState('')
  const [ears, setEars] = useState('')
  const [eyes, setEyes] = useState('')
  const [mouth, setMouth] = useState('')
  const [nose, setNose] = useState('')
  const [hand, setHand] = useState('')
  const [arm, setArm] = useState('')
  const [extras, setExtras] = useState('')

  const [tab, setTab] = useState('background')

  const axiosCall = async (part) => {
    let data = ''
    await axios
      .get('http://localhost:5000/', { params: { part: part } })
      .then((res) => {
        data = res.data
      })
      .catch((err) => console.log('err: ', err))
    return data
  }

  const handleRequest = (res, all, single) => {
    all(res)
    single(res[0].url)
  }

  const download_image = async () => {
    await html2canvas(document.getElementById('to_save'), {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      let a = document.createElement('a')
      a.href = canvas.toDataURL('image/png')
      a.download = 'capture.png'
      a.click()
    })
  }

  useEffect(() => {
    axiosCall('background')
      .then((res) => handleRequest(res, setAllBackground, setBackground))
      .catch((err) => console.log('err: ', err))
    axiosCall('head')
      .then((res) => handleRequest(res, setAllHead, setHead))
      .catch((err) => console.log('err: ', err))
    axiosCall('body')
      .then((res) => handleRequest(res, setAllBody, setBody))
      .catch((err) => console.log('err: ', err))
    axiosCall('ears')
      .then((res) => handleRequest(res, setAllEars, setEars))
      .catch((err) => console.log('err: ', err))
    axiosCall('eyes')
      .then((res) => handleRequest(res, setAllEyes, setEyes))
      .catch((err) => console.log('err: ', err))
    axiosCall('mouth')
      .then((res) => handleRequest(res, setAllMouth, setMouth))
      .catch((err) => console.log('err: ', err))
    axiosCall('nose')
      .then((res) => handleRequest(res, setAllNose, setNose))
      .catch((err) => console.log('err: ', err))
    axiosCall('hand')
      .then((res) => handleRequest(res, setAllHand, setHand))
      .catch((err) => console.log('err: ', err))
    axiosCall('arm')
      .then((res) => handleRequest(res, setAllArm, setArm))
      .catch((err) => console.log('err: ', err))
    axiosCall('extras')
      .then((res) => handleRequest(res, setAllExtras, setExtras))
      .catch((err) => console.log('err: ', err))
  }, [])

  return (
    <div className="flex justify-center">
      <div className="flex-1 items-center">
        <div className="flex items-center justify-center h-[80%]">
          <div className="relative w-[500px] h-[500px]" id="to_save">
            <img src={background} alt="" />
            <img className="absolute w-full h-full top-0" src={head} alt="" />
            <img className="absolute w-full h-full top-0" src={body} alt="" />
            <img className="absolute w-full h-full top-0" src={ears} alt="" />
            <img className="absolute w-full h-full top-0" src={eyes} alt="" />
            <img className="absolute w-full h-full top-0" src={mouth} alt="" />
            <img className="absolute w-full h-full top-0" src={nose} alt="" />
            <img className="absolute w-full h-full top-0" src={hand} alt="" />
            <img className="absolute w-full h-full top-0" src={arm} alt="" />
            <img className="absolute w-full h-full top-0" src={extras} alt="" />
          </div>
        </div>
        <div className="flex justify-center p-5">
          <button onClick={() => download_image()}>Download</button>
        </div>
      </div>

      <div className="h-[1000px] overflow-scroll flex-1">
        <div className="p-10 space-x-5">
          <button onClick={() => setTab('background')}>Background</button>
          <button onClick={() => setTab('head')}>Head</button>
          <button onClick={() => setTab('body')}>Body</button>
          <button onClick={() => setTab('ears')}>Ears</button>
          <button onClick={() => setTab('eyes')}>Eyes</button>
          <button onClick={() => setTab('mouth')}>Mouth</button>
          <button onClick={() => setTab('nose')}>Nose</button>
          <button onClick={() => setTab('hand')}>Hand</button>
          <button onClick={() => setTab('arm')}>Arm</button>
          <button onClick={() => setTab('extras')}>Extras</button>
        </div>
        {tab === 'background' && (
          <AvatarComponents all={allBackground} setValue={setBackground} />
        )}
        {tab === 'head' && (
          <AvatarComponents all={allHead} setValue={setHead} />
        )}
        {tab === 'body' && (
          <AvatarComponents all={allBody} setValue={setBody} />
        )}
        {tab === 'ears' && (
          <AvatarComponents all={allEars} setValue={setEars} />
        )}
        {tab === 'eyes' && (
          <AvatarComponents all={allEyes} setValue={setEyes} />
        )}
        {tab === 'mouth' && (
          <AvatarComponents all={allMouth} setValue={setMouth} />
        )}
        {tab === 'nose' && (
          <AvatarComponents all={allNose} setValue={setNose} />
        )}
        {tab === 'hand' && (
          <AvatarComponents all={allHand} setValue={setHand} />
        )}
        {tab === 'arm' && <AvatarComponents all={allArm} setValue={setArm} />}
        {tab === 'extras' && (
          <AvatarComponents all={allExtras} setValue={setExtras} />
        )}
      </div>
    </div>
  )
}
export default Avatar
