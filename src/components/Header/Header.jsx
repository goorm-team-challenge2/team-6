import cn from 'classnames';

import { Typography } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import CustomModal from "@/components/Modal/CustomModal";
import {useState} from "react";

const Header = ({formResults, setFormResults}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<CustomModal isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} formResults={formResults} setFormResults={setFormResults}/>
			</div>
		</header>
	);
};

export default Header;
