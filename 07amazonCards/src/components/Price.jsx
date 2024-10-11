export default function Price({oldPrices, newPrices}){
    return (
        <div className="bg-[#e0c367] rounded-bl-xl pt-2 pb-8 rounded-br-xl w-[269px] h-[35px] hover:cursor-pointer">
            <span className="line-through">{oldPrices}</span>
            &nbsp; &nbsp;          {/*used to give space between two words in a single line*/}
            <span className="font-bold">{newPrices}</span>
        </div>
    )
}