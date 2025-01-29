import { HomePageButton } from './components/HomePageButton';
import { ScrapPageButton } from './components/ScrapPageButton';
import './style/menu.css';

export const Menu = () => {
  return (
    <footer style={{ backgroundColor: 'black' }} className="menu-container">
      <HomePageButton />
      <ScrapPageButton />
    </footer>
  );
};
