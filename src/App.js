import { ConfigProvider, theme } from "antd";
import ErrorBoundary from "shared/ErrorBoundary";
import AppRoutes from "routes";
import "./App.css";
import {useSelector} from 'react-redux';
function App() {
  const { token } = theme.useToken();
  const isDark = useSelector((state)=>state.theme.isDark)
  return (
      <ErrorBoundary>
        <ConfigProvider
          theme={{
            algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            components: {
              Layout: {
                headerBg: "",
              },
              Table: {
                // headerBg: isDark ? '' : token.colorBorderSecondary,
                
              },
              Card:{
                // headerBg: isDark ? token.blue5 : token.blue4,
                // colorTextHeading: isDark ? '' : 'white',
                paddingLeft:'0px'
              },
            },
          }}
        >
          <AppRoutes />
        </ConfigProvider>
      </ErrorBoundary>
  );
}
export default App;
