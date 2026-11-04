type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="error">Could not load games: {message}</p>;
};
export default ErrorMessage;
