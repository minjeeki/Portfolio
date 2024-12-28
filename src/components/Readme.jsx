import { useUser } from '../App';

const Readme = () => {
  const { user } = useUser();

  return (
    <div>
      <div>{user.name}/README.md</div>
      <div></div>
    </div>
  )
}

export default Readme;