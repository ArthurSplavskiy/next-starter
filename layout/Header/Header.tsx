import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo.svg';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
		</header>
	);
};
