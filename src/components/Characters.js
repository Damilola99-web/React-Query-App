import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CharacterCard from './CharacterCard';

export default function Characters() {
	const [ page, setPage ] = useState(1);
	const fetchCharacters = async ({ queryKey }) => {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		);
		return response.json();
	};

	const { data, status, isPreviousData } = useQuery([ 'characters', page ], fetchCharacters, {
		keepPreviousData : true,
	});
	// console.log(data.info);
	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'error') {
		return <div>Error</div>;
	}

	return (
		<div className=' flex flex-col' >
			<div className=" flex flex-wrap w-full items-center justify-center">
				{data.results?.map((character) => (
					<CharacterCard data={character} key={character.id} />
				))}
			</div>
			<div className=' w-full flex items-center justify-between'>
				<button className=' px-4 py-2 rounded-lg text-black bg-white w-[150px]  ' disabled={page === 1} onClick={()=>setPage(old => old - 1)}>Previous</button>
				<p className=' text-white text-lg font-bold'>Page : {page}</p>
				<button disabled={isPreviousData && !data?.info.next} className=' px-4 py-2 rounded-lg text-black bg-white w-[150px]  ' onClick={()=>setPage(old => old + 1)}>Next</button>
			</div>
		</div>
	);
}
