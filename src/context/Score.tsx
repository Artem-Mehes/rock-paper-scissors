import React, { useState, createContext, useEffect, FunctionComponent } from 'react';
import { IScoreCtx } from '../interfaces';

export const ScoreContext = createContext<Partial<IScoreCtx>>({});

const getStorageScore = (): number => {
	const storageScore: string | null = localStorage.getItem('score');

	return storageScore === null ? 0 : +storageScore;
};

export const ScoreProvider: FunctionComponent = ({ children }) => {
	const [score, setScore] = useState<number>(getStorageScore);

	useEffect(() => localStorage.setItem('score', String(score)), [score]);

	return (
		<ScoreContext.Provider value={{ score, setScore }}>
			{children}
		</ScoreContext.Provider>
	);
};
