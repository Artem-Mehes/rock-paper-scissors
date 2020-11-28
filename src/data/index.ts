import scissors from '../images/icon-scissors.svg';
import lizard from '../images/icon-lizard.svg';
import rock from '../images/icon-rock.svg';
import spock from '../images/icon-spock.svg';
import paper from '../images/icon-paper.svg';
import { ICharacter, IRules } from '../interfaces';

export const characters: Array<ICharacter> = [
	{
		name: 'scissors',
		imgSrc: scissors,
	},
	{
		name: 'lizard',
		imgSrc: lizard,
	},
	{
		name: 'rock',
		imgSrc: rock,
	},
	{
		name: 'spock',
		imgSrc: spock,
	},
	{
		name: 'paper',
		imgSrc: paper,
	},
];

export const rules: IRules = {
    scissors: {
        beats: ['paper', 'lizard'],
        lose: ['spock', 'rock']
    },
    paper: {
        beats: ['rock', 'spock'],
        lose: ['scissors', 'lizard']
    },
    rock: {
        beats: ['scissors', 'lizard'],
        lose: ['paper', 'spock']
    },
    lizard: {
        beats: ['spock', 'paper'],
        lose: ['scissors', 'rock']
    },
    spock: {
        beats: ['scissors', 'rock'],
        lose: ['lizard', 'paper']
    }, 
}
