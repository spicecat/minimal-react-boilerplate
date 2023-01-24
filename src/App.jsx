import { HashRouter, Route, Routes } from 'react-router-dom';
import { } from './contexts';
import { Home, Layout, NotFound } from './containers';

export default function App() {
    return (
        <HashRouter basename='/'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='test' element={<div>test</div>} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};