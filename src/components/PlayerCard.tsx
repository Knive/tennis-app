import { Player } from "../lib/Player"

const subtitlesStyle = 'subtitle'

const regionNames = new Intl.DisplayNames(
	['en'], { type: 'region' }
)

function getRegionName(countryCode: string) {
	let name = 'Serbia'

	try {
		name = regionNames.of(countryCode)!
	} catch (err) {
		name = countryCode
	}
	return name
}

export default function PlayerCard({ player }: { player: Player }) {

	return (
		<div className="bg-white h-36 w-full shadow-lg flex hover:shadow-yellow-700 overflow-clip">
			<div className="h-36 w-36 flex justify-center ml-5">
				<img alt={player.shortname} src={player.picture} className="h-[300px] min-w-fit" />
			</div>
			<div className="flex flex-col justify-center ml-8">
				<span className="title text-lg">{player.firstname + ' ' + player.lastname}</span>
				<div className="mt-5 flex space-x-10 card-text text-sm">
					<div>
						<div className={subtitlesStyle}>RANK</div>
						<div>{player.data.rank}</div>
					</div>
					<div>
						<div className={subtitlesStyle}>POINTS</div>
						<div>{new Intl.NumberFormat(navigator.language).format(player.data.points)}</div>
					</div>
					<div>
						<div className={subtitlesStyle}>COUNTRY</div>
						<div>{getRegionName(player.country.code)}</div>
					</div>
				</div>
			</div>
		</div>
	)
}