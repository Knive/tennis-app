import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { countryNamesMap } from "../components/PlayerCard";

export default function PlayerDetails() {

	const params = useParams();
	const context = useContext(AppContext)
	const player = context?.players.find(p => p.id === parseInt(params.id!))

	return (
		<div className="bg-black/50 w-screen h-screen fixed">
			<div className="mx-auto px-5 lg:px-10 xl:max-w-7xl relative">
				<Link to="/" className="text-white flex justify-center my-7 transition ease-in-out hover:translate-y-1">
					<CloseIcon className="h-10 w-10" />
				</Link>

				{/* Player's picture */}
				<img
					className="hidden sm:block w-[500px] absolute bottom-0 -left-40 object-cover object-[50%_0px] drop-shadow-[0_20px_13px_rgba(0,0,0,0.4)] z-50"
					style={{ height: 'calc(100% - 100px)' }}
					alt={player?.shortname} src={player?.picture}
				/>

				<div className="bg-white w-full h-screen p-10 relative overflow-y-auto">
					<div className="mb-32">
						<div className="flex flex-col items-center sm:block">
							{/* Responsive rounded picture */}
							<div className="sm:hidden h-40 w-40 overflow-hidden rounded-full border-tennis-orange border-solid border-4">
								<img className="object-cover" alt={player?.shortname} src={player?.picture} />
							</div>

							<div>
								{/* Full name */}
								<div className="sm:ml-40 lg:ml-56">
									<div className="player-firstname text-4xl md:text-6xl lg:text-7xl text-white">{player?.firstname}</div>
									<div className="player-lastname text-5xl md:text-7xl lg:text-8xl text-tennis-orange">{player?.lastname}</div>
								</div>


								{/* Player's country flag */}
								<div className="flex items-center sm:block mt-5 sm:mt-0 sm:absolute sm:right-10 sm:top-10 drop-shadow-lg">
									<img className="h-7 sm:h-16 lg:h-24" alt={player?.country.code} src={player?.country.picture} />
									<div className="subtitle text-xl sm:text-3xl lg:text-5xl text-center font-light tracking-widest sm:mt-2 ml-2 sm:ml-0">{player?.country.code}</div>
								</div>
							</div>
						</div>

						{/* Player's data */}
						<div className="mt-10 sm:mt-20 flex items-start flex-col md:flex-row">
							<div className="sm:ml-72 lg:ml-80 grid w-full sm:w-auto sm:gap-x-10 md:gap-x-0 grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 card-text text-base leading-6 md:w-3/5 lg:w-3/4">
								<div>
									<div className="subtitle">RANK</div>
									<div>#{player?.data.rank}</div>
								</div>
								<div>
									<div className="subtitle">POINTS</div>
									<div>{new Intl.NumberFormat(navigator.language).format(player?.data.points)}</div>
								</div>
								<div>
									<div className="subtitle">COUNTRY</div>
									<div>{countryNamesMap[player?.country.code!] ?? player?.country.code}</div>
								</div>
								<div>
									<div className="subtitle">BIRTHDAY</div>
									<div>N/A</div>
								</div>
								<div className="lg:col-span-2">
									<div className="subtitle">AGE</div>
									<div>{player?.data.age}</div>
								</div>
								<div>
									<div className="subtitle">WEIGHT</div>
									<div>{player?.data.weight / 1000} kg</div>
								</div>
								<div className="lg:col-span-2">
									<div className="subtitle">HEIGHT</div>
									<div>{player?.data.height} cm</div>
								</div>
							</div>
							<div className="sm:ml-72 mt-10 md:mt-0 md:ml-0 card-text text-base md:w-2/5 lg:w-1/4">
								<div className="subtitle">CAREER TITLES</div>
								<div className="text-sm">Ut et takimata exerci elitr consetetur te dolore stet elitr dolore vel aliquyam diam duo eirmod. Tempor duo lorem. Luptatum in magna sit feugiat sed diam dolore sed kasd sed veniam diam eleifend clita. Et nostrud dolor clita nihil gubergren erat invidunt lorem et diam amet ipsum consectetuer ea dolor. Sit amet erat diam dolor nonumy justo duis wisi et adipiscing facilisi invidunt diam. Takimata vero feugiat sadipscing lorem sadipscing dolore. Clita stet dolor autem dolor sanctus aliquyam diam rebum sea no sadipscing duis dolore lorem voluptua dolores. Sit erat vulputate ad nibh stet. Dolore diam erat lorem eos dolor sed invidunt dolor ut sed lorem veniam dolores suscipit eos dolore. Adipiscing diam diam eos sed justo ullamcorper voluptua facilisis aliquyam dolore sit eum illum labore suscipit amet sit. Invidunt elitr gubergren dolore takimata accusam magna diam voluptua amet gubergren vulputate at ut option amet invidunt dolore. Tempor gubergren luptatum sit facer dolore tempor elitr esse rebum illum no duo lorem sanctus eum.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}