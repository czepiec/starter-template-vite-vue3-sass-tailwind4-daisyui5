import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';

const router = createRouter({
        history: createWebHistory(new URL(import.meta.env.BASE_URL).pathname),
	routes: routes,
});

export default router;
