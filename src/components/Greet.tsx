type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? ` Welcome to ${props.name}! You have ${props.messageCount} messages.`
          : `Welcome Guest!!`}
      </h1>
    </div>
  );
};
