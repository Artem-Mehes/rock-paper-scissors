import { Dispatch, SetStateAction } from "react";

export interface IModalProps {
    closeModal: () => void
}

export interface ICharacterProps {
    info: ICharacter
    onClick?: () => void
    position?: string
    size?: string
}

export interface IFooterProps {
    openModal: () => void
}

export interface ICharacterStyleProps {
    imgSrc: string,
    characterName: string
    position?: string
    size?: string
}

export interface ICharacter { 
    imgSrc: string,
    name: string
}

export interface IGameProps {
    playerPick: ICharacter
    enemyPick: ICharacter
    finishRound: () => void
}

export interface ITheme {
    colors: {
        [key: string]: string,
    },
    font: string
}

export interface IRules {
    [key: string]: {
        [key: string]: string[]
    }
}

export interface IScoreCtx {
    score: number
    setScore: Dispatch<SetStateAction<number>>
}