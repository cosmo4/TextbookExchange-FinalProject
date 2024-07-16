const Postcard = ({ postcontent, conditions, user_id, created_at }) => {
  const DaysAgo = (created_at) => {
    const givenDate = new Date(created_at);
    const currentDate = new Date();
    const timeDiff = currentDate - givenDate;
    const ago = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(ago);
    return ago;
  };

  const days = DaysAgo(created_at);
  return (
    <div className="my-4 bg-slate-200 rounded-lg p-4">
      <div className="flex justify-between m-2">
        <h3>{user_id}</h3>
        {days < 1 ? <p>Today</p> : <p>{days} days ago</p>}
      </div>
      <div className="m-2 p-2 space-y-2">
        <p>{postcontent}</p>
        <p>Condition: {conditions}</p>
      </div>
    </div>
  );
};

export default Postcard;
