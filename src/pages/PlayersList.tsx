import { useCallback, useContext, useRef, useState } from "react"
import PlayerCard from "../components/PlayerCard"
import { AppContext } from "../App"
import { Link } from "react-router-dom"
import { Player } from "../lib/Player"

export default function PlayersList() {

	const context = useContext(AppContext)
	const { players } = context!

	const [searching, setSearching] = useState(false)
	const [searchResults, setSearchResults] = useState<Array<Player>>([])
	const searchRef = useRef<HTMLInputElement>(null)

	function handleSearch() {
		var search = searchRef.current?.value;

		// Search player
		if (search !== undefined && search !== '') {

			setSearchResults(players.filter(
				p => p.firstname.toLowerCase().startsWith(search!.toLowerCase())
					|| p.lastname.toLocaleLowerCase().startsWith(search!.toLocaleLowerCase())
			))

			setSearching(true)

			// Empty, display players list again
		} else {
			setSearching(false)
		}
	}

	/**
	 * Search results list
	 */
	const SearchBarResults = useCallback(() => {
		if (searching) {

			// No match
			if (searchResults.length === 0)
				return <div className="mt-5 text-black/50">Sorry, we were not able to find the player.</div>

			// Match
			return <div className="grid grid-cols-1 gap-6 my-10">
				{
					searchResults?.map(player =>
						<Link to={`./players/${player.id}`} key={player.id}>
							<PlayerCard player={player} />
						</Link>)
				}
			</div>
		}

		return null
	}, [searchResults, searching])

	return (
		<div className="m-auto mt-10 px-5 max-w-[450px] md:ml-20 md:mt-15 lg:ml-32 lg:mt-20 xl:max-w-none xl:w-1/3">
			<input
				ref={searchRef}
				onChange={handleSearch}
				className="bg-opacity-30 bg-black rounded-lg w-full outline-none px-4 py-4 text-tennis-orange-light placeholder:text-tennis-orange-light"
				placeholder="Search for a player"
			/>
			<SearchBarResults />
			<div className="grid grid-cols-1 gap-6 my-10">
				{
					!searching && players?.map(player =>
						<Link to={`./players/${player.id}`} key={player.id}>
							<PlayerCard player={player} />
						</Link>
					)
				}
			</div>
		</div>
	)
}