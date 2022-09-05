import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user: { avatar_url, login } }) {
  return (
    <div className='card shadow-md compact side bd-base-100'>
      <div className='flex-row items-center card-body space-x-4'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='User' />
            </div>
          </div>
        </div>
        <div>
          <h3 className='card-title'>{login}</h3>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Go to profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
