type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="font-dazzle tracking-widest text-2xl text-accent">
      Could not load games: {message}
    </p>
  );
};
export default ErrorMessage;
