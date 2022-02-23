type Props = {
  children?: JSX.Element,
};

function Home({ children }: Props): JSX.Element {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex-grow">
      <div className="flex justify-between">
        <div className="border border-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Home;
