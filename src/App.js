import "./App.css";
import Layout from "./layout/layout";
import "antd/dist/antd.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* <div className="App"> */}
            <Layout>
              <MyRoutes />
            </Layout>
          {/* </div> */}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
