import ensaAgadir from '../assets/Images/ensaAgadir.jpg';
import ecoleOuarzazat from '../assets/Images/Blue.jpg';
import EnsaBeni from '../assets/Images/EnsaBeni.jpg';
import estMeknas from '../assets/Images/estMeknas.jpg';
import EnsaKheribga from '../assets/Images/EnsaKheribga.jpg';
import said from '../assets/Images/said_wahid.jpg'
import youssef from '../assets/Images/youssef_chigane.jpg'
import outman from '../assets/Images/outman_bazzaz.jpg'
import mohssine from '../assets/Images/mohssine_masaaf.jpg'
import hassan from '../assets/Images/hassan_fadili.jpg'
import anas from '../assets/Images/anas_belabbes.jpg'
import { Link } from 'react-router-dom';

import '../assets/styles/cards.css'
export default function Cards() {
    const handleClick = () => {
        window.location.href = '/Event';
    };
    return (
        <>
            <section className='section'>
                <div className="max-content mx-auto gap-6 cards-container">
                    <figure className='space-y-5 card w-96 h-96 shadow-xl'>
                        <div className="w-max rounded-lg">

                            <img className='h-40 w-96' src={ecoleOuarzazat} alt="" />

                        </div>
                        <div className='date-contain flex m-10'>
                            <div className='aaa bg-red-500 rounded'>
                                <h5 className='text-slate-100 font-bold'>17 Feb</h5>
                            </div>

                        </div>
                        <div className='inline-block text-justify'>
                            <h4 className='font-bold text-sm indent-5'>Microsoft Tech Day</h4>
                            <p className='p-2 indent-5 text-xs text-gray-500'>Microsoft Tech Day</p>
                        </div>


                        <div>
                            <div>
                                <p className='font-mono text-ms font-bold p-1 '>Speakers</p>
                            </div>


                            <div className='imgSpeaker'>
                                <div className='spk1'>
                                    <img className='img' src={said} alt="" />
                                </div>
                                <div className='spk1'>
                                    <img className='img' src={youssef} alt="" />
                                </div><div className='spk1'>
                                    <img className='img' src={mohssine} alt="" />
                                </div>
                            </div>
                        </div>


                    </figure>
                    <figure className='space-y-5 card w-96 h-96 shadow-xl'>
                        <div className="w-max rounded-lg">

                            <img className='h-40 w-96' src={ecoleOuarzazat} alt="" />

                        </div>
                        <div className='date-contain flex m-10'>
                            <div className='aaa bg-red-500 rounded'>
                                <h5 className='text-slate-100 font-bold'>03 Mar</h5>
                            </div>


                        </div>
                        <div className='inline-block text-justify'>
                            <h4 className='font-bold text-sm indent-5'>Microsoft Tech Day</h4>
                            <p className='p-1  text-xs text-gray-500  text-balance'>Morocco Microsoft Community a
                                organisé en partenariat avec
                                ENSA AGADIR et AppsClub Le 9 Décembre 2023 Microsoft Tech Talks.</p>
                        </div>


                        <div>
                            <div>
                                <p className='font-mono text-ms font-bold ml-1'>Speakers</p>
                            </div>


                            <div className='imgSpeaker'>
                                <div className='spk1'>
                                    <img className='img' src={anas} alt="" />
                                </div>
                                <div className='spk1'>
                                    <img className='img' src={youssef} alt="" />
                                </div><div className='spk1'>
                                    <img className='img' src={mohssine} alt="" />
                                </div>
                            </div>
                        </div>

                    </figure>
                    <figure className='space-y-5 card w-96 h-96 shadow-xl '>
                        <div className="w-max rounded-lg ">

                            <img className='h-40 w-96' src={ecoleOuarzazat} alt="" />

                        </div>
                        <div className='date-contain flex m-10'>
                            <div className='aaa bg-red-500 rounded'>
                                <h5 className='text-slate-100 font-bold'>25 Avr</h5>
                            </div>

                        </div>
                        <div className='inline-block text-justify'>
                            <h4 className='font-bold text-sm indent-5'>Digital Transformation Using Azure Services</h4>
                            <p className='p-2 indent-5 text-xs text-gray-500'>Digital Transformation Using Azure Services

                            </p>
                        </div>


                        <div>
                            <div>
                                <p className='font-mono text-ms font-bold p-1 '>Speakers</p>
                            </div>


                            <div className='imgSpeaker'>
                                <div className='spk1'>
                                    <img className='img' src={said} alt="" />
                                </div>
                                <div className='spk1'>
                                    <img className='img' src={outman} alt="" />
                                </div><div className='spk1'>
                                    <img className='img' src={hassan} alt="" />
                                </div>
                            </div>
                        </div>
                    </figure>


                </div>
                <div className='p-10 button-container'>
                    <Link to='/Event' className='font-bold py-2 px-8 rounded-full bg-red-500 text-white hover:bg-red-800'>
                        Show more
                    </Link>
                </div>
            </section>
        </>
    );
}
