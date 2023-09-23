import React, { useState } from 'react';

import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import ResultView from './components/ResultView/ResultView';

function App() {
	const [formResults, setFormResults] = useState([]);

	return (
		<div className={styles.App}>
			<Header formResults={formResults} setFormResults={setFormResults}/>
			<main className={styles.main}>
				{formResults.length === 0 ? (
					<EmptyView />
				) : (
					<ResultView formResults={formResults} />
				)}
			</main>
		</div>
	);
}

export default App;
