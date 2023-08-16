export default function UpdateComp({ updates }) {
  console.log('updates: ')
  console.log(updates);

  return (
    <div className="border-x">
      {updates.map((update, id) => (
        <div key={id} className="border-y p-3">
          <h3>{update.text}</h3>
        </div>
      ))}
    </div>
  );
}
