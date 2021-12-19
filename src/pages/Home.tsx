import GenderRate from '@/components/GenderRate';

function Home(): JSX.Element {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex-grow">
      <div className="flex justify-between">
        <div className="border border-gray-400">
          <GenderRate />
        </div>
      </div>
    </div>
  )
}

export default Home;
