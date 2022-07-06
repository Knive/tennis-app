import { useContext } from "react"
import PlayerCard from "../components/PlayerCard"
import { AppContext } from "../App"
import { Link } from "react-router-dom"

export default function PlayersList() {

	const context = useContext(AppContext)
	const { players } = context!

	return (
		<div className="m-auto mt-10 px-5 max-w-[450px] md:ml-20 md:mt-15  lg:ml-32 lg:mt-20 xl:max-w-none xl:w-1/3">
			<input
				className="bg-opacity-30 bg-black rounded-lg w-full outline-none px-4 py-4 text-tennis-orange-light placeholder:text-tennis-orange-light"
				placeholder="Search for a player"
			/>
			<div className="grid grid-cols-1 gap-6 my-10">
				{
					players?.map(player =>
						<Link to={`./players/${player.id}`} key={player.id}>
							<PlayerCard player={player} />
						</Link>
					)
				}
			</div>
		</div>
	)
}