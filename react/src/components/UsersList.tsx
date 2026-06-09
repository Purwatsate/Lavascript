import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import { useTheme } from "../context/ThemeContext";
import {useFetch} from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UsersList() {
  const { theme, toggleTheme } = useTheme();
  const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid gap-4">
      Current Theme: {theme}
      <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
      {users && users.map(user => (
        <div key={user.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}