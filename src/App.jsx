import { EmptyView, Header } from '@/components';
import React, { useState } from 'react';
import ResultView from './components/ResultView/ResultView';

import styles from './App.module.scss';

function App() {
    const [formResults, setFormResults] = useState([1]);

    return (
        <div className={styles.App}>
            <Header />
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
