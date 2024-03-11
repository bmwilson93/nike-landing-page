import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center w-full max-sm:w-full">
      <img 
        src={imgURL} alt={name} className="w-[280px] h-[280px] hover-grow"
      />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-m leading-normal text-slate-gray">(4.5)</p>
        <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard