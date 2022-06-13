
import Timestamp from './Timestamp.js';


function IdCard({idcard}) {
return (

<div className="idcard">
<ProfileImage image={tweet.user.image} />

<div className="body">
<div className="top">
<User userData={tweet.user} />
<Timestamp tweet={tweet.timestamp} />
</div>

<Message message={tweet.message} />
<Actions />
</div>

<i className="fas fa-ellipsis-h"></i>

</div>

);
}

export default Tweet;
