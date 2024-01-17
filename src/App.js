import ErrorBoundary from "shared/ErrorBoundary";
import AppRoutes from "routes";
import "./App.css";
import "assets/style/utilities.css";
function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}
export default App;
