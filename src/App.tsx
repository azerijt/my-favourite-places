import MainContent from "./MainContent";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

function App(): JSX.Element {
  return (
    <main className="page">
      <AppHeader />
      <MainContent />
      <AppFooter />
    </main>
  );
}

export default App;
