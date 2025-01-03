import { useState } from 'react';
import ReactGithubCalendar from 'react-github-calendar';
import './../styles/ComponentsGrass.css';

const ComponentsGrass = () => {
  const username = 'minjeeki';
  
  const themes = {
    default: {
      light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
      dark: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    },
    solvedAc: {
      light: ['#1a1b27', '#234b6e', '#2d6a9f', '#4295d1', '#77bdfb'],
      dark: ['#f5f5f5', '#91c7b1', '#6fb98f', '#507d69', '#264653'],
    },
    alternative: {
      light: ['#0d1117', '#370617', '#6a040f', '#9d0208', '#dc2f02'],
      dark: ['#f3e6e3', '#f0a6ca', '#d45079', '#960200', '#570000'],
    },
  };

  const [theme, setTheme] = useState(themes.default);

  const selectRandomTheme = () => {
    const weightedThemes = [
      { name: 'default', weight: 0.5 },
      { name: 'solvedAc', weight: 0.3 },
      { name: 'alternative', weight: 0.2 },
    ];

    const randomValue = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < weightedThemes.length; i++) {
      cumulativeWeight += weightedThemes[i].weight;
      if (randomValue <= cumulativeWeight) {
        return themes[weightedThemes[i].name];
      }
    }

    return themes.default;
  };

  const handleChangeTheme = () => {
    const randomTheme = selectRandomTheme();
    setTheme(randomTheme);
  };

  return (
    <div className="component-grass-section">
      <div className="component-title-container">
        <h4 className="component-grass-title">Contributions</h4>
        <button
          onClick={handleChangeTheme}
          className="component-grass-button"
          title="잔디 랜덤 돌리기"
        >
          ☘️
        </button>
      </div>
      <div className="component-grass-container">
        <ReactGithubCalendar
          username={username}
          theme={theme}
          token={import.meta.env.VITE_GITHUB_TOKEN}
          className="comp-grass"

        />
      </div>
    </div>
  );
};

export default ComponentsGrass;