import { HomePageButton } from './components/HomePageButton';
import { ScrapPageButton } from './components/ScrapPageButton';
import './style/menu.css';

export const Menu = () => {
  return (
    <div style={{ backgroundColor: 'black' }} className="menu-container">
      <HomePageButton />
      <ScrapPageButton />
    </div>
  );
};
