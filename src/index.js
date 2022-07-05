import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './redux/store';
const rootElement = document.querySelector("#root");

const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
