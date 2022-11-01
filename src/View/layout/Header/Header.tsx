import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header
			className={cn(className, styles.header)}
			{...props}
		>
			LOGO
		</header>
	);
};
