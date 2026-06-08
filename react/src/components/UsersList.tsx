import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import { useTheme } from "../context/ThemeContext";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid gap-4">
      Current Theme: {theme}
      <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
      {users.map(user => (
        <div key={user.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}