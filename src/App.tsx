import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Layout from './components/Layout';
import { Player } from './lib/Player';
import PlayerDetails from './pages/PlayerDetails';
import PlayersList from './pages/PlayersList';

/**
 * App context (just to store the players)
 */
export const AppContext = createContext<{
	players: Array<Player>,
	setPlayers: Dispatch<SetStateAction<Array<Player>>>
} | undefined>(undefined)

/**
 * Tennis App
 */
function App() {

	const [players, setPlayers] = useState<Array<Player>>([])

	useEffect(() => {
		fetch(process.env.REACT_APP_DATA_URL!)
		.then(response => response.json())
		.then(data => setPlayers(data.players))
	}, [])

	return (
		<AppContext.Provider value={{ players, setPlayers }}>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PlayersList />} />
						<Route path="/players/:id" element={<PlayerDetails />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</BrowserRouter>
			</Layout>
		</AppContext.Provider>
	)
}

export default App;
