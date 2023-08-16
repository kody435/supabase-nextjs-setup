export default function UpdateComp({ updates }) {
  console.log('updates: ')
  console.log(updates);

  return (
    <div className="border-x">
      {updates.map((update) => (
        <div key={update.update_id} className="border-y p-3">
          <h3>{update.text}</h3>
        </div>
      ))}
    </div>
  );
}
