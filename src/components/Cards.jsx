import ensaAgadir from '../assets/Images/ensaAgadir.jpg';
import ecoleOuarzazat from '../assets/Images/ecoleOuarzazate.jpg';
import EnsaBeni from '../assets/Images/EnsaBeni.jpg';
import estMeknas from '../assets/Images/estMeknas.jpg';
import EnsaKheribga from '../assets/Images/EnsaKheribga.jpg';
import '../assets/styles/cards.css'
export default function Cards() {
    return (
        <>
            <section className='section'>
                <div className="flex space-x-6 items-stretch">
                    <figure className='w-80 p-5 card w-96 shadow-xl flex flex-col'>
                        <div className="rounded-lg mb-4">

                            <img src={ensaAgadir} alt="" />

                        </div>
                        <div className="space-y-2 m-auto p-5 card-actions justify-center">
                            <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Order Now</button>
                            <button className="border-2 border-black bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-12 rounded-full">Details</button>

                        </div>
                    </figure>
                    <figure className='w-80 p-5 card w-96 shadow-xl flex flex-col'>
                        <div className="rounded-lg mb-4">

                            <img  src={ecoleOuarzazat} alt="" />

                        </div>
                        <div className="space-y-2 m-auto p-5 card-actions justify-center">
                            <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Order Now</button>
                            <button className="border-2 border-black bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-12 rounded-full">Details</button>

                        </div>
                    </figure>
                    <figure  className='w-80 p-5 card w-96 shadow-xl flex flex-col'>
                        <div className="rounded-lg mb-4">

                            <img  src={EnsaBeni} alt="" />

                        </div>
                        <div className="space-y-2 m-auto p-5 card-actions justify-center">
                            <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Order Now</button>
                            <button className="border-2 border-black bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-12 rounded-full">Details</button>

                        </div>
                    </figure>
                    <figure className='w-80 p-5 card w-96 shadow-xl flex flex-col'>
                        <div className="rounded-lg mb-4">

                            <img className='object-contain'  src={EnsaKheribga} alt="" />

                        </div>
                        <div className="space-y-2 m-auto p-5 card-actions justify-center">
                            <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Order Now</button>
                            <button className="border-2 border-black bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-12 rounded-full">Details</button>

                        </div>
                    </figure>
                    <figure  className='w-80 p-5 card w-96 shadow-xl flex flex-col'>
                        <div className="rounded-lg mb-4">

                            <img src={estMeknas} alt="" />

                        </div>
                        <div className="space-y-2 m-auto p-5 card-actions justify-center ">
                            <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Order Now</button>
                            <button className="border-2 border-black bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-12 rounded-full">Details</button>

                            
                        </div>
                    </figure>
                </div>
            </section>
        </>
    );
}
