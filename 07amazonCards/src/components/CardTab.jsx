import Card from './Card.jsx'
// import Image from './Image.jsx';

function CardTab() {
  return (
    <div className='flex flex-wrap justify-center items-center'>
        <Card title="Logitech MX Master"  idx={0} img={'./src/images/logitech_mouse.jpg'}></Card>
        <Card title="Apple Pencil (2nd Gen)" idx={1} img={'./src/images/apple_pencil.jpg'} className=""></Card>
        <Card title="Zebronics Zeb-transformer" idx={2} img={'./src/images/keyboard.webp'}></Card>
        <Card title="Apple iPhone 16 Pro Max" idx={3} img={'./src/images/iphone.webp'}></Card>
    </div>
  )
}

export default CardTab;
