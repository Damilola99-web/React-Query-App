import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CharacterCard({ data }) {
	const [ doa, setDoa ] = useState();
    useEffect(()=>{
        if (data.status === 'Alive') {
            setDoa('Alive')
        }
        if (data.status === 'Dead') {
            setDoa('Dead')
        }
        if (data.status === 'unknown') {
            setDoa('unknown')
        }
    }, [])
	return (
		<div className=" shadow-xl w-[550px] bg-[#545454] flex flex-row m-4 rounded-xl">
			<img
				className=" rounded-t-xl rounded-b-xl rounded-r-none w-[250px]"
				src={data.image}
				alt=""
			/>
			<div className=" p-4 flex flex-col justify-between">
				<div className=' flex flex-col'>
					<h2 className=' text-xl font-bold text-white'>{data.name}</h2>
					<div className=" flex space-x-2 items-center">
						<span className={` w-4 h-4 rounded-full block ${doa} `} />
						<p className='text-lg font-bold text-white'>
							{data.status} - {data.species}
						</p>
					</div>
				</div>

				<div className=' flex flex-col'>
					<p>Last known location :</p>
					<p className='text-lg font-bold text-white'>{data.location.name}</p>
				</div>

				<div className=' flex flex-col space-y-1'>
					<p>First Seen In :</p>
					<p className='text-lg font-bold text-white'>{data.origin.name}</p>
				</div>
			</div>
		</div>
	);
}
