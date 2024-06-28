import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Button from './Buttoncomp'
import DownloadImage from './download'
import RandomButton from './RandomButton';
function ImgCard () {


  const alpacaOptions = {
    hair: ['default', 'curls', 'short', 'bang', 'elegant', 'quiff'],
    ears: ['default', 'tilt-backward', 'tilt-forward'],
    eyes: ['default', 'angry', 'naughty', 'panda', 'smart'],
    mouth: ['default', 'astonished', 'eating', 'laugh', 'tongue'],
    neck: ['default', 'bend-backward', 'bend-forward', 'thick'],
    leg: ['default', 'bubble-tea', 'cookie', 'game-console', 'tilt-backward', 'tilt-forward'],
    accessories: ['earings', 'flower', 'glasses', 'headphone'],
    background: ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70']
  };

  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];


  //neck state
  const [neck, setNeck] = useState(
    'alpaca-generator-assets/alpaca/neck/default.png'
  )
  const base = () => {
    setNeck('alpaca-generator-assets/alpaca/neck/default.png')
  }
  const bendBack = () => {
    setNeck('alpaca-generator-assets/alpaca/neck/bend-backward.png')
  }
  const bendForward = () => {
    setNeck('alpaca-generator-assets/alpaca/neck/bend-forward.png')
  }
  const thick = () => {
    setNeck('alpaca-generator-assets/alpaca/neck/thick.png')
  }

  //Hair State
  const [hair, setHair] = useState(
    'alpaca-generator-assets/alpaca/hair/default.png'
  )
  const baseHair = () => {
    setHair('alpaca-generator-assets/alpaca/hair/default.png')
  }
  const bangs = () => {
    setHair('alpaca-generator-assets/alpaca/hair/bang.png')
  }
  const curls = () => {
    setHair('alpaca-generator-assets/alpaca/hair/curls.png')
  }
  const quiff = () => {
    setHair('alpaca-generator-assets/alpaca/hair/quiff.png')
  }
  const short = () => {
    setHair('alpaca-generator-assets/alpaca/hair/short.png')
  }
  const elegant = () => {
    setHair('alpaca-generator-assets/alpaca/hair/elegant.png')
  }

  //mouth state

  const [mouth, setMouth] = useState(
    'alpaca-generator-assets/alpaca/mouth/default.png'
  )
  const basemouth = () => {
    setMouth('alpaca-generator-assets/alpaca/mouth/default.png')
  }
  const astonished = () => {
    setMouth('alpaca-generator-assets/alpaca/mouth/astonished.png')
  }
  const laugh = () => {
    setMouth('alpaca-generator-assets/alpaca/mouth/laugh.png')
  }
  const tongue = () => {
    setMouth('alpaca-generator-assets/alpaca/mouth/tongue.png')
  }
  const eating = () => {
    setMouth('alpaca-generator-assets/alpaca/mouth/eating.png')
  }

  //eyes state

  const [eyes, setEyes] = useState(
    'alpaca-generator-assets/alpaca/eyes/default.png'
  )
  const baseEye = () => {
    setEyes('alpaca-generator-assets/alpaca/eyes/default.png')
  }
  const naughty = () => {
    setEyes('alpaca-generator-assets/alpaca/eyes/naughty.png')
  }
  const panda = () => {
    setEyes('alpaca-generator-assets/alpaca/eyes/panda.png')
  }
  const smart = () => {
    setEyes('alpaca-generator-assets/alpaca/eyes/smart.png')
  }
  const angry = () => {
    setEyes('alpaca-generator-assets/alpaca/eyes/angry.png')
  }

  //accessories state

  const [accessories, setAccessories] = useState('')
  const earings = () => {
    setAccessories('alpaca-generator-assets/alpaca/accessories/earings.png')
  }
  const flower = () => {
    setAccessories('alpaca-generator-assets/alpaca/accessories/flower.png')
  }
  const glasses = () => {
    setAccessories('alpaca-generator-assets/alpaca/accessories/glasses.png')
  }
  const headphone = () => {
    setAccessories('alpaca-generator-assets/alpaca/accessories/headphone.png')
  }

  //legs state

  const [legs, setLegs] = useState(
    'alpaca-generator-assets/alpaca/leg/default.png'
  )
  const baseLeg = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/default.png')
  }
  const bubbletea = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/bubble-tea.png')
  }
  const cookie = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/cookie.png')
  }
  const gameconsole = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/game-console.png')
  }
  const tileBackLeg = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/tilt-backward.png')
  }
  const tileForwLeg = () => {
    setLegs('alpaca-generator-assets/alpaca/leg/tilt-forward.png')
  }
  //Ears state

  const [ears, setEars] = useState(
    'alpaca-generator-assets/alpaca/ears/default.png'
  )
  const baseears = () => {
    setEars('alpaca-generator-assets/alpaca/ears/default.png')
  }
  const tileBackward = () => {
    setEars('alpaca-generator-assets/alpaca/ears/tilt-backward.png')
  }
  const tiltForward = () => {
    setEars('alpaca-generator-assets/alpaca/ears/tilt-forward.png')
  }

  //Backgrounds
  const [color, setColor] = useState(
    'alpaca-generator-assets/alpaca/backgrounds/blue50.png'
  )
  const addblue60Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/blue60.png')
  }
  const addblue70Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/blue70.png')
  }

  const adddarkblue30Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/darkblue30.png')
  }
  const adddarkblue50Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/darkblue50.png')
  }
  const adddarkblue70Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/darkblue70.png')
  }
  const green50Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/green50.png')
  }
  const green60Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/green60.png')
  }
  const green70Color = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/green70.png')
  }
  const grey40 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/grey40.png')
  }
  const grey80 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/grey80.png')
  }
  const red50 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/red50.png')
  }
  const red70 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/red70.png')
  }
  const yellow50 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/yellow50.png')
  }
  const yellow70 = () => {
    setColor('alpaca-generator-assets/alpaca/backgrounds/yellow70.png')
  }
  

  //Button state
  const [button, setButton] = useState(<div >
 
    <span>
      <Button event={base} buttonname='Default' />
      <Button event={bendBack} buttonname='Bend Backwards' />
      <Button event={bendForward} buttonname='Bend Forward' />
      <Button event={thick} buttonname='Thick' />
    </span>
  </div>)

  const baseButton = () => {
    setButton(
    <div >
      <span>
        <Button event={base} buttonname='Default' />
        <Button event={bendBack} buttonname='Bend Backwards' />
        <Button event={bendForward} buttonname='Bend Forward' />
        <Button event={thick} buttonname='Thick' />
      </span>
    </div>)
  }

  const mouthButton = () => {
    setButton(
      <div>
      <span>
        <Button event={basemouth} buttonname='Default' />
        <Button event={astonished} buttonname='Astonished' />
        <Button event={laugh} buttonname='Laugh' />
        <Button event={tongue} buttonname='Tongue' />
        <Button event={eating} buttonname='Eating' />
      </span>
    </div>)
  }

  const hairButton = () => {
    setButton(
      <div>
            <span>
              <Button event={baseHair} buttonname='Default' />
              <Button event={curls} buttonname='Curls' />
              <Button event={quiff} buttonname='Quiff' />
              <Button event={short} buttonname='Short' />
              <Button event={elegant} buttonname='Elegant' />
              <Button event={bangs} buttonname='Bangs' />
            </span>
          </div>)
  }

  const eyeButton = () => {
    setButton(
      <div>
            <span>
              <Button event={baseEye} buttonname='Default' />
              <Button event={naughty} buttonname='Naughty' />
              <Button event={panda} buttonname='Panda' />
              <Button event={smart} buttonname='Smart' />
              <Button event={angry} buttonname='Angry' />
            </span>
          </div>)
  }

  const earButton = () => {
    setButton(
      <div>
            <span>
              <Button event={baseears} buttonname='Default' />
              <Button event={tileBackward} buttonname='Tilt Backwards' />
              <Button event={tiltForward} buttonname='Tilt Forward' />
            </span>
          </div>)
  }

  const AccessoriesButton = () => {
    setButton(
      <div>
            <span>
              <Button event={earings} buttonname='Earings' />
              <Button event={glasses} buttonname='Glasses' />
              <Button event={flower} buttonname='Flower' />
              <Button event={headphone} buttonname='Headphones' />
            </span>
          </div>
          )
  }


  const legButton = () => {
    setButton(
      <div>
            <span>
              <Button event={bubbletea} buttonname='Bubble Tea' />
              <Button event={gameconsole} buttonname='Gaming Console' />
              <Button event={cookie} buttonname='Cookie' />
              <Button event={tileBackLeg} buttonname='Tilt Backwards' />
              <Button event={tileForwLeg} buttonname='Tilt Forward' />
            </span>
          </div>
          )
  }

  const bgButton = () => {
    setButton(
      <div >
            <button
              onClick={addblue60Color}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/blue60.png'
              />
            </button>
            <button
              onClick={addblue70Color}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/blue70.png'
              />
            </button>
            <button
              onClick={green50Color}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/green50.png'
              />
            </button>
            <button
              onClick={green60Color}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/green60.png'
              />
            </button>
            <button
              onClick={green70Color}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/green70.png'
              />
            </button>
            <button
              onClick={grey40}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/grey40.png'
              />
            </button>
            <button
              onClick={grey80}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/grey80.png'
              />
            </button>
            <button
              onClick={red50}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/red50.png'
              />
            </button>
            <button
              onClick={red70}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/red70.png'
              />
            </button>
            <button
              onClick={yellow50}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/yellow50.png'
              />
            </button>
            <button
              onClick={yellow70}
              className='bg-emerald-400  m-2 rounded-full'
            >
              {' '}
              <img
                className='h-8 w-8 p-2'
                src='alpaca-generator-assets/alpaca/backgrounds/yellow70.png'
              />
            </button>
          </div>
          )
  }


  const randomImg = () => {
    // Eyes
    const randomEyes = getRandomItem(alpacaOptions.eyes);
    setEyes(`alpaca-generator-assets/alpaca/eyes/${randomEyes}.png`);
  
    // Hair
    const randomHair = getRandomItem(alpacaOptions.hair);
    setHair(`alpaca-generator-assets/alpaca/hair/${randomHair}.png`);
  
    // Ears
    const randomEars = getRandomItem(alpacaOptions.ears);
    setEars(`alpaca-generator-assets/alpaca/ears/${randomEars}.png`);
  
    // Mouth
    const randomMouth = getRandomItem(alpacaOptions.mouth);
    setMouth(`alpaca-generator-assets/alpaca/mouth/${randomMouth}.png`);
  
    // Neck
    const randomNeck = getRandomItem(alpacaOptions.neck);
    setNeck(`alpaca-generator-assets/alpaca/neck/${randomNeck}.png`);
  
    // Leg
    const randomLeg = getRandomItem(alpacaOptions.leg);
    setLegs(`alpaca-generator-assets/alpaca/leg/${randomLeg}.png`);
  
    // Accessories
    const randomAccessories = getRandomItem(alpacaOptions.accessories);
    setAccessories(`alpaca-generator-assets/alpaca/accessories/${randomAccessories}.png`);
  
    // Background
    const randomBackground = getRandomItem(alpacaOptions.background);
    setColor(`alpaca-generator-assets/alpaca/backgrounds/${randomBackground}.png`);
  };

  const containerRef = useRef(null);
  const [combinedImage, setCombinedImage] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      html2canvas(containerRef.current).then(canvas => {
        setCombinedImage(canvas.toDataURL('image/png'));
      });
    }
  }, [color, neck, hair, mouth, eyes, accessories, legs, ears]);

  return (
    <>
      <div className='w-auto h-auto container grid-cols-subgrid grid md:pr-20 lg:grid-cols-12'>
        <div id="image-container" className='relative grid col-span-6 m-16 w-96 h-96 '>
          <img className='relative' src={color} />
          <img className='absolute' src={neck} />

          <img
            className='absolute'
            src='alpaca-generator-assets\alpaca\nose.png'
          />
          <img className='absolute' src={hair} />
          <img className='absolute' src={mouth} />
          <img className='absolute' src={eyes} />
          <img className='absolute' src={accessories} />
          <img className='absolute' src={legs} />
          <img className='absolute' src={ears} />
          <img className='absolute' src={accessories} />
           
          <div className=''><span className='flex justify-center p-2 flex-row'>
          <DownloadImage  />
           <button onClick={randomImg} className="bg-slate-800 m-4 w-40 p-4 text-white font-semibold shadow-black drop-shadow-md rounded-md" >Random 🔀</button></span>
          </div>
        </div>
   
        <div className=' grid col-span-6 '>
          <h1 className='text-4xl font-poppins text-start my-8 font-bold'>Accessories</h1>
          <div  className=' bg-slate-800 p-4 shadow-slate-950 drop-shadow-lg rounded-xl  h-fit w-auto'>
            <span className='flex justify-start align-middle flex-wrap'>
              <Button event={baseButton} buttonname='Neck' />
              <Button event={hairButton} buttonname='Hair' />
              <Button event={AccessoriesButton} buttonname='Accessories' />
              <Button event={eyeButton} buttonname='Eyes' />
              <Button event={legButton} buttonname='Leg' />
              <Button event={mouthButton} buttonname='Mouth' />
              <Button event={earButton} buttonname='Ears' />
              <Button event={bgButton} buttonname='Background' />
            </span>
          </div>
          
          <h1 className='text-4xl my-8 text-start  font-bold'>Style</h1>
          <div className='buttonbox bg-slate-800 shadow-slate-950 drop-shadow-lg rounded-xl  h-fit w-auto'><span  className='flex justify-start p-4 align-middle flex-wrap'>{button}</span></div>
          
        </div>
        
      </div>
    </>
  )
}

export default ImgCard
