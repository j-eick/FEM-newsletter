import "../../App.css";

type buttonProps = {
  children: React.ReactNode;
  type: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: buttonProps) {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
}
