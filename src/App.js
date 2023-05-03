import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from './components/Home.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQ.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ParallelQueries from './components/ParallelQueries';
import DynamicParallelQueries from './components/DynamicParallelQueries';
import DependentQueries from './components/DependentQueries';
import InsertSuperheroes from './components/InsertSuperheroes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/super-heroes',
    element: <SuperHeroesPage></SuperHeroesPage>
  },
  {
    path: '/rq-super-heroes',
    element: <RQSuperHeroesPage></RQSuperHeroesPage>
  },
  {
    path: '/parallel-queries',
    element: <ParallelQueries></ParallelQueries>
  },
  {
    path: '/dynamic-parallel-queries',
    element: <DynamicParallelQueries heroIds={[1, 3]}></DynamicParallelQueries>
  },
  {
    path: '/dependednt-queries',
    element: <DependentQueries email='vishwas@example.com'></DependentQueries>
  },
  {
    path: '/insert-superheroes',
    element: <InsertSuperheroes></InsertSuperheroes>
  },
]);

const queryClient = new QueryClient();



function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  );
}

export default App;
