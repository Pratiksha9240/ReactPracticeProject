import './UserDetails.css'

const UserDetails = (props) => {

    const displayUser = props.userList.map((ele) => (
        <div>
            <h3>{ele.name}</h3>
            <h3>{ele.age}</h3>
        </div>
    ));

   return (<div className="user">
        <h3>{displayUser}</h3>
    </div>)
}

export default UserDetails;