import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<aside className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<Menu />
		</aside>
	);
};
