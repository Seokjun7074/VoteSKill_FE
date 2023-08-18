import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from 'Router';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';

function App() {
  const queryClient = new QueryClient();

  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
    console.warn = () => {};
  }

  return (
    <div className="App">
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </QueryClientProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
