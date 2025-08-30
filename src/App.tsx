import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home/Home';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
