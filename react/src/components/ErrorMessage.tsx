

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-800 font-medium">⚠️ {message}</p>
    </div>
  );
}

export default ErrorMessage;