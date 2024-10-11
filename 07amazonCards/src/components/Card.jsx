import Price from "./Price"
import Image from "./Image";

function Card({title, idx, img}) {
  let oldPrices = ["Rs.12,999", "Rs.11,999", "Rs.1,999", "Rs.1,29,000"];
  let newPrices = ["Rs.10,999", "Rs.9,999", "Rs.1,599", "Rs.99,999"];
  let Description = [["4000 DPI Wireless Touch Mouse", "5 Programmable buttons"]
                     , ["Industry-leading low latency", "Designed for iPad Pro"]
                     , ["Designed for iPad pro", "Intuitive surface"]
                     , ["Durable titanium design", "12GB RAM and more expandable"]
                    ];
  
  return (
    <div className="border-2 bg-[#cae1e1] border-slate-400 mx-4 my-4 py-5 rounded-xl w-[272px] h-[315px] hover:cursor-pointer">
        <h4 className='font-bold mb-8'>{title}</h4>
        <Image img={img}></Image>
        <div className="text-start pl-1.5">
          <li className="mb-2">{Description[idx][0]}</li>
          <li className="mb-4">{Description[idx][1]}</li>
        </div>
        <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
  )
}

export default Card