import { Player } from "../lib/Player"

/**
 * Country names map just to display the whole country name
 */
export const countryNamesMap: Record<string, string> = {
	'SRB': 'Serbia',
	'SUI': 'Suisse',
	'ESP': 'Spain'
}

/**
 * Displays a Player card
 */
export default function PlayerCard({ player }: { player: Player }) {

	return (
		<div className="bg-white h-36 w-full pr-5 shadow-lg flex hover:shadow-yellow-700 overflow-hidden">
			<div className="h-36 w-36 overflow-hidden">
				<img alt={player.shortname} src={player.picture} className="h-full w-full object-cover object-top mt-2" />
			</div>
			<div className="flex flex-col justify-center ml-5">
				<span className="title text-lg">{player.firstname + ' ' + player.lastname}</span>
				<div className="mt-5 flex space-x-5 card-text text-sm leading-6">
					<div>
						<div className="subtitle">RANK</div>
						<div>#{player.data.rank}</div>
					</div>
					<div>
						<div className="subtitle">POINTS</div>
						<div>{new Intl.NumberFormat(navigator.language).format(player.data.points)}</div>
					</div>
					<div>
						<div className="subtitle">COUNTRY</div>
						<div>{countryNamesMap[player.country.code] ?? player.country.code}</div>
					</div>
				</div>
			</div>
		</div>
	)
}