import React, { useState } from 'react';
import Header from '../Header';
import StartGame from '../StartGame';
import Footer from '../Footer';
import Modal from 'react-modal';
import ModalInner from '../ModalInner';
import { ScoreProvider } from '../../context/Score';
import modalStyles from '../../styles/modalStyles';

Modal.setAppElement('#root');

const App = () => {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	const openModal = (): void => setIsOpen(true);

	const closeModal = (): void => setIsOpen(false);

	return (
		<ScoreProvider>
			<Header />
			<StartGame />
			<Footer openModal={openModal} />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Game Rules"
			>
                <ModalInner closeModal={closeModal} />
			</Modal>
		</ScoreProvider>
	);
};

export default App;
