import { HomePageTab } from './components/HomePageTab';
import { ScrapPageTab } from './components/ScrapPageTab';
import './style/menu.css';

export const TabMenu = () => {
  return (
    <footer className="menu-container">
      <HomePageTab />
      <ScrapPageTab />
    </footer>
  );
};
