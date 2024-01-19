import { ConfigProvider, theme } from "antd";
import ErrorBoundary from "shared/ErrorBoundary";
import AppRoutes from "routes";
import "./App.css";
function App() {
  const isDark = false;
  return (
    <ErrorBoundary>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          // components:{
          //   Layout:{

          //   }
          // }
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </ErrorBoundary>
  );
}
export default App;
