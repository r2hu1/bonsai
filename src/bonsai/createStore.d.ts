/**
 * Store creation utility for Bonsai.
 * Creates an isolated state store with its own state, middleware, and subscriptions.
 * Useful for component-specific state or feature-based state isolation.
 *
 * @example
 * ```typescript
 * // Create a store for user state
 * const userStore = createBonsaiStore<{ name: string; age: number }>();
 *
 * // Use in a component
 * function UserProfile() {
 *   const name = userStore.use(state => state.name);
 *   return <div>Name: {name}</div>;
 * }
 * ```
 */
/**
 * Creates a new isolated state store.
 * Each store has its own state, middleware, and subscription system.
 *
 * @returns An object with methods to interact with the store
 *
 * @example
 * ```typescript
 * // Create a store with TypeScript types
 * interface TodoState {
 *   todos: string[];
 *   filter: 'all' | 'active' | 'completed';
 * }
 *
 * const todoStore = createBonsaiStore<TodoState>();
 *
 * // Initialize state
 * todoStore.set({ todos: [], filter: 'all' });
 *
 * // Use in components
 * function TodoList() {
 *   const todos = todoStore.use(state => state.todos);
 *   return <ul>{todos.map(todo => <li>{todo}</li>)}</ul>;
 * }
 * ```
 */
export declare function createBonsaiStore<State extends Record<string, any>>(): {
    get: () => State;
    set: (partial: Partial<State>) => void;
    use: <T>(selector?: (state: State) => T) => T;
};
